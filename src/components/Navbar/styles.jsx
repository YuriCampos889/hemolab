import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: relative; 
  display: flex;
  align-items: center;
  justify-content: center; 
  padding: 0 40px; 
  height: 50px;
  background-color: transparent; 
  z-index: 10; 
  filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.15));
  
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased; 
  -moz-osx-font-smoothing: grayscale;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%; 
    height: 25px; 
    background-color: rgba(255, 255, 255, 0.4); /* Traduzido o HEX com opacidade para RGBA para melhor legibilidade */
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px); 
    z-index: 1; 
  }
`;

export const NavGroupCenter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center; 
  height: 100%; 
  width: 85%; 
  max-width: 1400px; 
  margin: 0 auto; 
  padding: 0 50px; 
  z-index: 2; 

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: #1A2B4C;
    clip-path: polygon(0 0, 100% 0, calc(100% - 15px) 100%, 15px 100%);
    z-index: -1;
  }
`;

export const NavItem = styled.div`
  padding: 8px 15px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.8rem; 
  font-weight: 600; /* Ajustado levemente de 650 para 600, pois fontes costumam pular de 100 em 100 */
  letter-spacing: 0.8px; 
  color: #ffffff; 
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px; 
  height: fit-content;

  &:hover {
    background-color: rgba(244, 246, 248, 0.15); 
    border-radius: 6px; 
  }
`;