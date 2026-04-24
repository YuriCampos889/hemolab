import React from 'react';
import PageLayout from '../../components/layout/PageLayout';

import useAutoScroll from '../../hooks/AutoScroll';
import useVTKModel from '../../hooks/useVTKModel';
// UI e Estilos
import { 
  TopActionBar, CardContentRow, ThumbnailsSidebar, ThumbnailBox, 
  ThumbnailImage, ImageCanvas, DataSection, AnalysisTitle, 
  ModelNameLarge, ModelDescriptionText, CurrentModelLabel 
} from './styles';

import VTKRenderer from '../Viewer/vtk/VTKRenderer'; 
import adan1 from '../../assets/adan1.png';
import adan2 from '../../assets/adan2.png';
import adan3 from '../../assets/adan3.png';

export default function LayoutScreen() {
  const scrollRef = useAutoScroll();
  
  const { modelData, vizConfig, isLoading } = useVTKModel('/models/adan.vtp');
  return (
    <PageLayout>
      <div ref={scrollRef}>
        <TopActionBar>
          <CurrentModelLabel>
            Modelo: <strong>ADAN</strong>
          </CurrentModelLabel>
        </TopActionBar>

        <CardContentRow>
          <ThumbnailsSidebar>
            {[adan1, adan2, adan3].map((img, idx) => (
              <ThumbnailBox key={idx}>
                <ThumbnailImage src={img} alt={`Adam ${idx + 1}`} />
              </ThumbnailBox>
            ))}
          </ThumbnailsSidebar>

          <ImageCanvas style={{ minHeight: '500px' }}>
            {isLoading ? (
              <div style={{ color: '#666' }}>Carregando modelo 3D ADAN...</div>
            ) : (
              <VTKRenderer 
                source={modelData.source} 
                config={vizConfig} 
                highlightedCellId={-1} 
              />
            )}
          </ImageCanvas>
          
          <DataSection>
            <AnalysisTitle>DADOS DE ANÁLISE</AnalysisTitle>
            <ModelNameLarge>ADAN</ModelNameLarge>
            
            <ModelDescriptionText>
              Este modelo anatômico tridimensional representa uma estrutura arterial segmentada para simulação computacional em dinâmica dos fluidos (CFD).
              <br /><br />
              Ele é utilizado para a análise de fluxos hemodinâmicos, cálculo de tensões de cisalhamento na parede endotelial (WSS) e identificação de zonas de recirculação.
            </ModelDescriptionText>
          </DataSection>
        </CardContentRow>
      </div>
    </PageLayout>
  );
}