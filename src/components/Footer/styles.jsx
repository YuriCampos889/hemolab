import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2rem;

  z-index: 1;

  /* FUNDO AZUL TRANSLÚCIDO(?) 
  background: rgba(0, 60, 255, 0.15);*/

  /*  EFEITO GLASS */
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(10px);

`;
export const FooterText = styled.p`
  /* Para dar contraste com o vídeo de fundo, talvez seja legal colocar o texto branco ou bem claro */
  color: #e2e8f0; 
  font-size: 0.85rem; 
  font-weight: 500;
  margin: 0;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
`;