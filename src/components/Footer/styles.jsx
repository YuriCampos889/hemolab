import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 64px;
  min-height: 64px;
  /* background-color: #1A2B4C; */
  
  backdrop-filter: blur(12px); 

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2rem;
  z-index: 200;
  margin-top: auto; 
`;

export const FooterText = styled.p`
  color: #718096;
  font-size: 0.85rem; 
  font-weight: 500;
  margin: 0;
  
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  
  -webkit-font-smoothing: antialiased;
`;