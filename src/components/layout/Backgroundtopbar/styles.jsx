import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 250px; 
  overflow: hidden; 
  position: relative; 
  background-color: #ffffff;
  margin-bottom: -50px; 
  z-index: 4;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(6, 65, 121, 0.9) 0%, rgba(249, 250, 250, 0.3) 50%);
    z-index: 3;
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
  left: 25%; 
  transform: translateX(-50%); 
  top: 85px; 
  height: 150px; 
  width: auto;
  object-fit: contain;
  z-index: 4;
`;