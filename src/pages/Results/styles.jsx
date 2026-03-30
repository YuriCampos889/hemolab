import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 400; 
  color: #2d3748; 
  background-color: #ffffff;
  -webkit-font-smoothing: antialiased; 
`;

export const GrayWrapper = styled.div`
  padding: 40px;
  background-color: #f0f2f5;
  flex: 1;
`;

export const MainContent = styled.main`
  max-width: 1400px; 
  margin: 0 auto;
  width: 100%;
`;

export const Card = styled.div`
  background: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  border: 1px solid #E2E8F0;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

export const PageTitle = styled.h2`
  margin: 0 0 20px 0;
  color: #1A2B4C;
  border-bottom: 2px solid #8b2929;
  padding-bottom: 10px;
  font-size: 1.8rem; 
  font-weight: 800; 
  align-self: flex-start; 
`;

export const InfoBar = styled.div`
  background: #f8f9fa;
  padding: 15px 20px;
  border: 1px solid #ddd;
  border-radius: 6px;
  display: flex;
  gap: 40px;
  margin-bottom: 20px;
  color: #2d3748;
  width: 100%; 
  box-sizing: border-box;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  justify-content: center;
  width: 100%;
`;

export const BotaoRegiao = styled.button`
  padding: 10px 20px;
  border: 1px solid #ccc;
  background: white;
  color: #2d3748;
  cursor: pointer;
  border-radius: 4px;
  font-family: inherit;
  font-weight: 700;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &.ativo {
    background: #1A2B4C;
    color: white;
    border-color: #1A2B4C;
  }

  &:hover:not(.ativo) {
    background-color: #F8F9FA; 
    color: #1A2B4C;
  }
`;

export const ContainerImagemCompleta = styled.div`
  width: 100%; 
  max-width: 1300px; 
  height: 600px; 
  margin: 0 auto 30px auto; 
  background: #000000; 
  border-radius: 8px;
  overflow: hidden; 
  border: 1px solid #E2E8F0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1); 

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }
`;

export const DownloadBtn = styled.button`
  background: #8b2929;
  color: white;
  padding: 12px 32px; 
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.2s ease;
  align-self: center; 

  &:hover {
    background-color: #6d1f1f; 
    transform: translateY(-1px); 
    box-shadow: 0 4px 12px rgba(139, 41, 41, 0.2); 
  }

  &:active {
    transform: translateY(0); 
  }
`;