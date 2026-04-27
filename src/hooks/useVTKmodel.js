import { useState, useEffect } from 'react';
import { CarregarProcessarModelo } from '../pages/Viewer/vtk/VTKDataParser'; 

export default function useVTKModel(modelPath) {
  const [modelData, setModelData] = useState({ source: null, options: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [vizConfig, setVizConfig] = useState({
    opacity: 100,
    tubeEnabled: true,
    flowVisible: false,
    
    colorBy: 'PointData:Pressure',   
    preset: 'CustomRedBlue' 
  });

  useEffect(() => {
    let isMounted = true;

    async function fetch3DModel() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await CarregarProcessarModelo(modelPath);
        if (isMounted) {
          setModelData(data);
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Erro ao carregar o modelo 3D:", err);
          setError("Falha ao carregar a renderização 3D.");
          setIsLoading(false);
        }
      }
    }

    if (modelPath) {
      fetch3DModel();
    }

    return () => { isMounted = false; };
  }, [modelPath]);

  return { modelData, vizConfig, setVizConfig, isLoading, error };
}