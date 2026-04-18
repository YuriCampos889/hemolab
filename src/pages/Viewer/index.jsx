import React, { useEffect, useRef, useState } from 'react'; 
import { 
  Box, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';

import {
  Container,
  GrayWrapper,
  MainContent,
  CenterColumn,
  TopActionBar, 
  CardContentRow, 
  ThumbnailsSidebar, 
  ThumbnailBox,      
  ThumbnailImage,    
  ImageCanvas, 
  DataSection,    
  AnalysisTitle,          
  ModelNameLarge,         
  ModelDescriptionText,   
  DropdownContainer,
  NavItem,
  DropdownMenu,
  DropdownItem,
  CurrentModelLabel 
} from './styles';

import Header from '../../components/Header';
import BackgroundTopbar from '../../components/Backgroundtopbar';
import Navbar from '../../components/Navbar'; 
import Footer from '../../components/Footer'; 
import adan1 from '../../assets/adan1.png';
import adan2 from '../../assets/adan2.png';
import adan3 from '../../assets/adan3.png';

// ==========================================
// IMPORTS DO KIT VTK
// ==========================================
import VTKRenderer from '../Viewer/vtk/VTKRenderer'; 
import { CarregarProcessarModelo } from '../Viewer/vtk/VTKDataParser'; 

export default function LayoutScreen() {
  const navbarRef = useRef(null);
  const [menuAberto, setMenuAberto] = useState(false);

  // ==========================================
  // ESTADOS DO VISUALIZADOR 3D
  // ==========================================
  const [modelData, setModelData] = useState({ source: null });
  const [vizConfig] = useState({
    opacity: 100,
    tubeEnabled: true,
    flowVisible: false,
    colorBy: ':', // Força uma cor sólida inicial
    preset: ''
  });

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  // ==========================================
  // BUSCAR O ARQUIVO .VTP NA PASTA PUBLIC/MODELS
  // ==========================================
  useEffect(() => {
    async function fetch3DModel() {
      try {
        const data = await CarregarProcessarModelo('/models/adan.vtp');
        setModelData(data);
      } catch (error) {
        console.error("Erro ao carregar o modelo 3D:", error);
      }
    }
    fetch3DModel();
  }, []);

  // Efeito original de scroll da Navbar
  useEffect(() => {
    if (navbarRef.current) {
      setTimeout(() => {
        const rect = navbarRef.current.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const offsetPosition = elementTop - 120;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 600); 
    }
  }, []); 

  return (
    <Container>
      <Header />
      <BackgroundTopbar />
      <div ref={navbarRef}><Navbar /></div>

      <GrayWrapper>
        <MainContent>
          <CenterColumn> 
            
            <TopActionBar>
              <CurrentModelLabel>
                Modelo: <strong>ADAN</strong>
              </CurrentModelLabel>
            </TopActionBar>

            <CardContentRow>
              <ThumbnailsSidebar>
                <ThumbnailBox>
                  <ThumbnailImage src={adan1} alt="Adam 1" />
                </ThumbnailBox>
                <ThumbnailBox>
                  <ThumbnailImage src={adan2} alt="Adam 2" />
                </ThumbnailBox>
                <ThumbnailBox>
                  <ThumbnailImage src={adan3} alt="Adam 3" />
                </ThumbnailBox>
              </ThumbnailsSidebar>

              {/* ==========================================
                  CANVAS DO VTK RENDERER
                  Adicionei um minHeight para garantir que 
                  o canvas não suma na primeira renderização
              ========================================== */}
              <ImageCanvas style={{ position: 'relative', overflow: 'hidden', minHeight: '500px' }}>
                {modelData.source ? (
                  <VTKRenderer 
                    source={modelData.source} 
                    config={vizConfig} 
                    highlightedCellId={-1} 
                  />
                ) : (
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '500px', color: '#666' }}>
                    <p>Carregando modelo 3D ADAN...</p>
                  </div>
                )}
              </ImageCanvas>
              
              <DataSection>
                <AnalysisTitle>DADOS DE ANÁLISE</AnalysisTitle>
                <ModelNameLarge>ADAN</ModelNameLarge>
                
                <ModelDescriptionText>
                  Este modelo anatômico tridimensional representa uma estrutura arterial segmentada para simulação computacional em dinâmica dos fluidos (CFD).
                  <br /><br />
                  Ele é utilizado para a análise de fluxos hemodinâmicos, cálculo de tensões de cisalhamento na parede endotelial (WSS) e identificação de zonas de recirculação. 
                  Os parâmetros extraídos auxiliam de forma direta na previsão de anomalias vasculares e no planejamento cirúrgico avançado.
                </ModelDescriptionText>
              </DataSection>
            </CardContentRow>
            
          </CenterColumn>
        </MainContent>
      </GrayWrapper>

      <Footer />
    </Container>
  );
}