import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 250px; 
  overflow: hidden; 
  position: relative; 
  background-color: #ffffff;
  margin-bottom: -50px; 
  z-index: 0;

  /* Camada de degradê por cima da imagem */
  &::after {
    content: "";
    position: absolute;
    inset: 0; /* Preenche todo o container */
    background: linear-gradient(to right, rgba(6, 65, 121, 0.9) 0%, rgba(249, 250, 250, 0.3) 50%);
    z-index: 1;
    pointer-events: none;
  }
`;

export const StyledImage = styled.img`
  width: 100%; 
  height: 100%; 
  object-fit: cover;
  display: block;
  object-position: center center;
  filter: blur(0px);
  transform: translateY(21%) scale(1.0) translateX(26%);
`;

export const LogoOverlay = styled.img`
  position: absolute;
  left: 16%; 
  transform: translateX(-50%); 
  top: 85px; 
  height: 90px; 
  width: auto;
  object-fit: contain;
  z-index: 1;
`;