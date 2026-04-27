// IMPORTANTE: Tem que ser o PolyDataReader da pasta Legacy!
import vtkPolyDataReader from "@kitware/vtk.js/IO/Legacy/PolyDataReader";
import vtkXMLPolyDataReader from "@kitware/vtk.js/IO/XML/XMLPolyDataReader";
import SCALAR_METADATA from "./ScalarMetadata.jsx";

function getVTPArrays(dataSet, typePrefix) {
    if (!dataSet) return [];
    const count = dataSet.getNumberOfArrays();
    const options = [];

    for (let i = 0; i < count; i++) {
        const array = dataSet.getArray(i);
        const name = array.getName();
        
        if (name === "Normals" || name === "TCoords") continue;
        
        const meta = SCALAR_METADATA[name];
        
        let labelDisplay;
        if (meta) {
            labelDisplay = meta.unit ? `${meta.label} (${meta.unit})` : meta.label;
        } else {
            labelDisplay = `(${typePrefix}) ${name}`;
        }
        
        options.push({
            label: labelDisplay,
            value: `${typePrefix}:${name}`
        });
    }
    return options;
}

function extractColorByOptions(source) {
    if (!source || typeof source.getPointData !== 'function') return [];
    
    const pointOptions = getVTPArrays(source.getPointData(), "PointData");
    const cellOptions = getVTPArrays(source.getCellData(), "CellData");
    
    return [
        { value: ':', label: 'Cor Sólida' },
        ...pointOptions,
        ...cellOptions
    ];
}

function extractTables(source) {
    if (!source || typeof source.getCellData !== 'function') return {}; 

    const tables = {}; 
    const arteryNamesArray = source.getCellData().getArrayByName('ArteryNames');
    
    if (arteryNamesArray) {
        const rawData = arteryNamesArray.getData();
        const decoder = new TextDecoder('utf-8');
        const bufferToDecode = rawData instanceof Uint8Array ? rawData : new Uint8Array(rawData);
        const fullString = decoder.decode(bufferToDecode);
        
        const names = fullString.split('\0').filter(name => name);
        tables.arteryNames = names.map((name, index) => [index, name]);
    } else {
        tables.arteryNames = [];
    }
    return tables;
}

export async function CarregarProcessarModelo(modelUrl) {
    try {
        const response = await fetch(modelUrl);
        
        if (!response.ok) {
            throw new Error(`Erro HTTP ao buscar o modelo! Status: ${response.status}`);
        }

        const isVtp = modelUrl.toLowerCase().endsWith('.vtp');
        const payload = await response.arrayBuffer();
        const reader = isVtp
            ? vtkXMLPolyDataReader.newInstance()
            : vtkPolyDataReader.newInstance();

        if (isVtp) {
            reader.parseAsArrayBuffer(payload);
        } else {
            const header = new TextDecoder('ascii', { fatal: false }).decode(payload.slice(0, 512));
            const isBinaryLegacy = /BINARY/i.test(header);

            if (isBinaryLegacy) {
                throw new Error(
                    "Legacy binary .vtk is not supported by this vtk.js reader. Please convert the file to ASCII .vtk or .vtp."
                );
            }

            const textContent = new TextDecoder('utf-8', { fatal: false }).decode(payload);
            reader.parseAsText(textContent);
        }
        
        // O PULO DO GATO: Pegar especificamente o output no índice 0
        const source = reader.getOutputData(0);

        // Trava de segurança
        if (!source || typeof source.getPointData !== 'function') {
            console.error("VTK Parser: O arquivo foi lido, mas não é um modelo 3D PolyData válido.", source);
            throw new Error("Formato de malha incompatível.");
        }

        const pointsCount = source.getNumberOfPoints?.() || 0;
        const cellsCount = source.getNumberOfCells?.() || 0;
        if (pointsCount === 0 || cellsCount === 0) {
            throw new Error(
                `Parsed PolyData is empty (points=${pointsCount}, cells=${cellsCount}). Check if the file is PolyData ASCII or convert to .vtp.`
            );
        }

        const colorByOptions = extractColorByOptions(source);
        const tables = extractTables(source);

        return { source, options: colorByOptions, tables };

    } catch (error) {
        console.error(`Erro ao carregar ou processar o modelo: ${modelUrl}`, error);
        throw error;
    }
}