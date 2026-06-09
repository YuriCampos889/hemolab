import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #1a2b4d;
  width: 100%;
  min-height: 4rem;
  margin-top: auto;
  
  display: flex;
  justify-content: center;
  padding: 1.25rem 2rem 1.5rem 2rem;
  z-index: 1;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
`;

export const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  @media (min-width: 48rem) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FooterText = styled.p`
  color: #94A3B8;
  font-size: 0.75rem; 
  font-weight: 400;
  margin: 0;
  text-align: left;
  line-height: 1.5;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
`;

export const FooterLogos = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  justify-content: flex-start;

  a {
    display: inline-flex;
  }

  img {
    height: 60px;
    width: auto;
    opacity: 0.7;
    filter: brightness(0) invert(1); 
    transition: opacity 0.2s ease;
    
    &:hover {
      opacity: 1;
    }
  }

  a:last-child img {
    height: 45px;
  }
`;