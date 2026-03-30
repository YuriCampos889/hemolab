import React from 'react';
import Background from '../../assets/background.png';
import Hemolab from '../../assets/Vector2.png'; 
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