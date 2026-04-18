import vtkXMLPolyDataReader from "@kitware/vtk.js/IO/XML/XMLPolyDataReader";
import SCALAR_METADATA from "./scalarMetadata.jsx"; // RESOLVER ESSE ERRO MAIS PRA FRENTE

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
    if (!source) return [];
    
    const pointOptions = getVTPArrays(source.getPointData(), "PointData");
    const cellOptions = getVTPArrays(source.getCellData(), "CellData");
    
    return [
        { value: ':', label: 'Cor Sólida' },
        ...pointOptions,
        ...cellOptions
    ];
}

function extractTables(source) {
    if (!source) return {}; 

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

        const arrayBuffer = await response.arrayBuffer(); 

        const reader = vtkXMLPolyDataReader.newInstance();
        reader.parseAsArrayBuffer(arrayBuffer);
        const source = reader.getOutputData();

        const colorByOptions = extractColorByOptions(source);
        const tables = extractTables(source);

        return { source, options: colorByOptions, tables };

    } catch (error) {
        console.error(`Erro ao carregar ou processar o modelo: ${modelUrl}`, error);
        throw error;
    }
}