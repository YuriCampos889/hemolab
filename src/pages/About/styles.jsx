import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 400; 
  color: #2d3748; 
  background-color: #ffffff;
  -webkit-font-smoothing: antialiased; 
`;

export const GrayWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 40px; 
  flex: 1; 
  background-color: #f0f2f5; 
`;

export const ContentWrapper = styled.main`
  width: 100%;
  max-width: 900px; /* Largura máxima para não esticar muito em telas grandes */
  margin: 0 auto;
`;

export const AboutCard = styled.div`
  background-color: #ffffff; 
  border-radius: 8px; 
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05); 
  display: flex;
  flex-direction: column;
  padding: 40px; 
  width: 100%;
  border: 1px solid #E2E8F0; 
`;

export const PageTitle = styled.h2`
  margin: 0 0 24px 0;
  font-size: 1.8rem; 
  color: #1A2B4C; 
  font-weight: 800; 
  border-bottom: 2px solid #8b2929; 
  padding-bottom: 12px;
  width: 100%;
  display: block;
`;

export const IntroText = styled.div`
  background-color: #ffffff;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  padding: 24px 32px;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #4A5568;
  margin-bottom: 32px;
  text-align: center;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
`;

export const FaqContainer = styled.div`
  background-color: #4A235A;
  border-radius: 8px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 15px -3px rgba(74, 35, 90, 0.3);
`;

export const FaqHeader = styled.h3`
  margin: 0 0 24px 0;
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const FaqItem = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  margin-bottom: 8px;
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

export const FaqQuestion = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  color: ${(props) => (props.$isOpen ? '#ffffff' : 'rgba(255, 255, 255, 0.85)')};
  font-size: 1.05rem;
  font-weight: 600;
  padding: 16px 8px;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
  }
`;

export const FaqAnswer = styled.div`
  max-height: ${(props) => (props.$isOpen ? '300px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
              opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              padding 0.3s ease;
  opacity: ${(props) => (props.$isOpen ? '1' : '0')};
  padding: ${(props) => (props.$isOpen ? '0 8px 16px 8px' : '0 8px')};

  p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.75);
    font-weight: 400;
  }
`;