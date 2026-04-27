import styled from 'styled-components';

export const TopActionBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center; 
  margin-bottom: 24px; 
`;

export const CurrentModelLabel = styled.span`
  font-size: 1.5rem; 
  color: #64748B;
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
  background-color: #FFFFFF; 
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  overflow: hidden; 
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
`;

export const ThumbnailsSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px; 
  border-right: 1px solid #E2E8F0; 
  background-color: #F8F9FA;
`;

export const ThumbnailBox = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1; 
  border-radius: 8px;
  border: 2px solid transparent;
  overflow: hidden;
  background-color: #FFFFFF;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: #0369A1;
    box-shadow: 0 4px 6px rgba(3, 105, 161, 0.15);
  }
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
  background-color: #FAFCFF;
  border-right: 1px solid #E2E8F0;
  overflow: hidden; 
`;

export const DataSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  background-color: #FFFFFF;
  border-top: 4px solid #0369A1; 
  padding: 32px 24px; 
`;

export const AnalysisTitle = styled.h3`
  margin: 0;
  font-size: 0.9rem;
  color: #0369A1;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  border-bottom: 2px solid #E2E8F0;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ModelNameLarge = styled.h2`
  margin: 0;
  font-size: 2.2rem; 
  color: #1A2B4C;
  font-weight: 800;
  line-height: 1.2;
`;

export const ModelDescriptionText = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: #4A5568;
  line-height: 1.6; 
  text-align: justify;
`;