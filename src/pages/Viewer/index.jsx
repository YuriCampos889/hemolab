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
  AdamImage,
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
import AdamImg from '../../assets/adan_view.png'; 
import adan1 from '../../assets/adan1.png';
import adan2 from '../../assets/adan2.png';
import adan3 from '../../assets/adan3.png';

export default function LayoutScreen() {
  const navbarRef = useRef(null);
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

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
              <DropdownContainer>
                <NavItem onClick={toggleMenu}>
                  <Box size={18} /> 
                  Modelos 
                  {menuAberto ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </NavItem>
                
                {menuAberto && (
                  <DropdownMenu>
                    <DropdownItem>Modelo Adan</DropdownItem>
                    <DropdownItem>Modelo 2</DropdownItem>
                    <DropdownItem>Modelo 3</DropdownItem>
                  </DropdownMenu>
                )}
              </DropdownContainer>

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

              <ImageCanvas>
                <AdamImage src={AdamImg} alt="Modelo Adam" />
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