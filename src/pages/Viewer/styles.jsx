import styled from 'styled-components';

export const TopActionBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center; 
  margin-bottom: 24px; 
`;

export const CurrentModelLabel = styled.span`
  font-size: 1.5rem; 
  color: #4A5568; 
  font-weight: 500;

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
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15); 
`;

export const ThumbnailsSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 12px; 
  border-right: 2px solid #E2E8F0; 
  background-color: #FAFCFF; 
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

export const ImageCanvas = styled.div`
  width: 100%;
  height: 600px; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent; 
  border-right: 1px solid #E2E8F0;
  overflow: hidden; 
`;

export const DataSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px; 
  border-top: 5px solid #ed2e1f; 
  padding: 24px 30px; 
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
`;

export const ModelDescriptionText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #4a5568;
  line-height: 1.6; 
  text-align: justify;
`;