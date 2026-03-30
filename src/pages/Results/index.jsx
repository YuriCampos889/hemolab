import React from 'react'; 
import {
  Container,
  GrayWrapper,
  MainContent,
  Card,
  PageTitle,
  InfoBar,
  ButtonGroup,
  BotaoRegiao,
  ContainerImagemCompleta,
  DownloadBtn
} from './styles';

import Header from '../../components/Header';
import BackgroundTopbar from '../../components/Backgroundtopbar';
import Navbar from '../../components/Navbar'; 
import Footer from '../../components/Footer'; 
import adanhead from '../../assets/adan_head 1.png'; 

export default function ResultadosScreen() {
  return (
    <Container>
      <Header />
      <BackgroundTopbar />
      <Navbar />

      <GrayWrapper>
        <MainContent>
          <Card> 
            <PageTitle>Resultados</PageTitle>

            <InfoBar>
              <span><strong>ID:</strong> HeMoLAB-001</span>
              <span><strong>Nome:</strong> Simulação Aorta e Cérebro</span>
              <span><strong>Data:</strong> 29/03/2026</span>
            </InfoBar>

            <ButtonGroup>
              <BotaoRegiao className="ativo">Head</BotaoRegiao>
              <BotaoRegiao>Aorta</BotaoRegiao>
              <BotaoRegiao>Limbs</BotaoRegiao>
              <BotaoRegiao>Torso</BotaoRegiao>
            </ButtonGroup>
            
            <ContainerImagemCompleta>
              <img src={adanhead} alt="Visualização Principal do HeMoLAB" />
            </ContainerImagemCompleta>

            <DownloadBtn>Download .CSV</DownloadBtn>
          </Card>
        </MainContent>
      </GrayWrapper>
      
      <Footer />
    </Container>
  );
}