import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 250px; 
  overflow: hidden; 
  position: relative; 
  
  margin-bottom: -50px; 
  z-index: 0;
`;

export const StyledImage = styled.img`
  width: 100%; 
  height: 200%; 
  object-fit: cover;
  display: block;
  filter: blur(6px); 
  object-position: center center bottom; 
  transform: translateY(-15%) scale(1.1);
`;

export const LogoOverlay = styled.img`
  position: absolute;
  left: 26%; 
  transform: translateX(-50%); 
  top: 85px; 
  height: 90px; 
  width: auto;
  object-fit: contain;
`;