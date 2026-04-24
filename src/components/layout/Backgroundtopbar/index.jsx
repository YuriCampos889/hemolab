import React from 'react'
import Background from '../../../assets/ADAVN_r_head_03.jpg';
import Hemolab from '../../../assets/hemolab_negative 1.png'; 
import { Container, StyledImage, LogoOverlay } from './styles';

function BackgroundTopbar() {
  return (
    <Container>
      <StyledImage src={Background} alt="Background" />
      <LogoOverlay src={Hemolab} alt="Logo HemoLab" />
    </Container>
  );
}

export default BackgroundTopbar;