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
  padding: 24px 40px; 
  flex: 1; 
  background-color: #f0f2f5; 
`;

export const MainContent = styled.main`
  display: flex; 
  width: 100%;
  max-width: 1600px;
`;

export const Card = styled.div`
  background-color: #f4f6f8;
  border-radius: 1px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15); 
  display: flex;
  flex-direction: column;
  padding: 30px; 
  width: 100%;
`;

export const CenterColumn = styled(Card)`
  align-items: flex-start;
  justify-content: flex-start;
`;

export const TopActionBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row; 
  align-items: center; 
  margin-bottom: 24px; 
  gap: 20px; 
`;

export const CurrentModelLabel = styled.span`
  font-size: 1.5rem; 
  color: #4A5568; 
  font-weight: 500;
  letter-spacing: 0.3px;

  strong {
    color: #1A2B4C; 
    font-weight: 800;
    font-size: 1.8rem; 
  }
`;

export const CardContentRow = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 350px; 
  gap: 0; 
  width: 100%;
  border: 1px solid #d6d6d6; 
  background-color: #ffffff; 
  overflow: hidden; 
`;

/* =========================================================
   SEÇÃO: MINIATURAS DA ESQUERDA
   ========================================================= */
export const ThumbnailsSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 12px; 
  border-right: 2px solid #E2E8F0; 
  background-color: #FAFCFF; 
  margin-top: 5px;
`;

export const ThumbnailBox = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1; 
  border: 2px solid #000000; 
  overflow: hidden;
  background-color: #ffffff;
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
`;

/* =========================================================
   SEÇÃO: IMAGEM PRINCIPAL
   ========================================================= */
export const ImageCanvas = styled.div`
  width: 100%;
  height: 600px; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent; 
  perspective: 500px; 
  border-right: 1px solid #E2E8F0;
  overflow: hidden; 
`;

export const AdamImage = styled.img`
  width: auto; 
  height: 200%; 
  max-width: 100%;
  object-fit: contain; 
  margin-top: 700px; 
  transform: translateZ(200px); 
  transform-origin: center center; 
`;

/* =========================================================
   SEÇÃO: TEXTOS DA DIREITA
   ========================================================= */
export const DataSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px; 
  border-top: 5px solid #ed2e1f; 
  padding: 24px 30px; 
  background-color: transparent;
`;

export const AnalysisTitle = styled.h3`
  margin: 0;
  font-size: 0.85rem;
  color: #7a2828; 
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  border-bottom: 1px solid #f0f2f5; 
  padding-bottom: 12px;
`;

export const ModelNameLarge = styled.h2`
  margin: 0;
  font-size: 2.2rem; 
  color: #2d3748;
  font-weight: 800;
  letter-spacing: -0.5px; 
`;

export const ModelDescriptionText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #4a5568;
  line-height: 1.6; 
  text-align: justify;
`;

/* =========================================================
   ESTILOS DO MENU DROPDOWN DE MODELOS 
   ========================================================= */
export const DropdownContainer = styled.div`
  position: relative; 
  display: inline-flex; 
  z-index: 20; 
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; 
  padding: 10px 18px;
  background-color: #FFFFFF; 
  border: 1px solid #E2E8F0; 
  border-radius: 8px; 
  
  color: #ed2e1f; 
  font-size: 0.85rem; 
  font-weight: 600; 
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.02); 

  &:hover {
    background-color: #F8F9FA;
    border-color: #CBD5E1;
    color: #E52E2E; 
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%; 
  left: 0;
  margin-top: 8px; 
  background-color: #FFFFFF; 
  min-width: 200px; 
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1); 
  border-radius: 8px; 
  overflow: hidden; 
  border: 1px solid #E2E8F0;
  z-index: 30; 
`;

export const DropdownItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  color: #4A5568;
  font-size: 0.8rem; 
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background-color: #F4F6F8;
    color: #E52E2E; 
    padding-left: 20px; 
  }
`;