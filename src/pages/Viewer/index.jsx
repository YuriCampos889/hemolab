import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import useAutoScroll from '../../hooks/AutoScroll';
import useVTKModel from '../../hooks/useVTKmodel';
import { 
  TopActionBar, ImageCanvas, CurrentModelLabel, AnalysisTitle, ModelNameLarge, ModelDescriptionText, DataSection
} from './styles';

import VTKRenderer from './vtk/VTKRenderer'; 

export default function LayoutScreen() {
  const scrollRef = useAutoScroll();
  
  const { modelData, vizConfig, isLoading, error } = useVTKModel('/models/ADAVN86coupling.vtp');

  return (
    <PageLayout>
      <div ref={scrollRef}>
        <TopActionBar>
          <CurrentModelLabel>
          </CurrentModelLabel>
        </TopActionBar>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 350px',
            border: '1px solid #d6d6d6',
            background: '#fff',
            boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.15)'
          }}
        >
          <ImageCanvas style={{ minHeight: '500px' }}>
            {isLoading ? (
              <div style={{ color: '#666', fontWeight: 600 }}>Loading 3D hemodynamic model...</div>
            ) : error ? (
              <div style={{ color: '#b91c1c', fontWeight: 600 }}>{error}</div>
            ) : (
              <VTKRenderer 
                source={modelData.source} 
                config={vizConfig} 
                highlightedCellId={-1} 
              />
            )}
          </ImageCanvas>

          <DataSection>
            <AnalysisTitle>VISUALIZATION CONTROLS</AnalysisTitle>
            <ModelNameLarge>ADAVN 86</ModelNameLarge>
            <ModelDescriptionText>
              Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description 
              Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description
              .
            </ModelDescriptionText>
          </DataSection>
        </div>
      </div>
    </PageLayout>
  );
}