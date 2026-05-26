import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const TopActionBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem; /* 24px */
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
  grid-template-columns: 12.5rem 1fr 21.875rem; /* 200px 1fr 350px */
  gap: 0;
  width: 100%;
  background-color: #FFFFFF;
  border: 0.0625rem solid #E2E8F0; /* 1px */
  border-radius: 0.75rem; /* 12px */
  overflow: hidden;
  box-shadow: 0 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.05), 0 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.03); /* 4px 6px -1px, 2px 4px -1px */

  @media ${device.desktop} {
    grid-template-columns: 10rem 1fr 18.75rem;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr;
    overflow: visible;
  }
`;

export const ThumbnailsSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* 16px */
  padding: 1rem; /* 16px */
  border-right: 0.0625rem solid #E2E8F0; /* 1px */
  background-color: #F8F9FA;

  @media ${device.laptop} {
    flex-direction: row;
    overflow-x: auto;
    border-right: none;
    border-bottom: 0.0625rem solid #E2E8F0;
    padding: 0.8rem;
  }
`;

export const ThumbnailBox = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 0.5rem; /* 8px */
  border: 0.125rem solid transparent; /* 2px */
  overflow: hidden;
  background-color: #FFFFFF;
  box-shadow: 0 0.0625rem 0.1875rem rgba(0,0,0,0.1); /* 1px 3px */
  cursor: pointer;
  transition: all 0.2s ease;

  @media ${device.laptop} {
    width: 8rem;
    flex-shrink: 0;
  }

  &:hover {
    transform: translateY(-0.125rem); /* -2px */
    border-color: #0369A1;
    box-shadow: 0 0.25rem 0.375rem rgba(3, 105, 161, 0.15); /* 4px 6px */
  }
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
`;

export const ImageCanvas = styled.div`
  width: 100%;
  height: 37.5rem; /* 600px */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FAFCFF;
  border-right: 0.0625rem solid #E2E8F0; /* 1px */
  overflow: hidden;

  @media ${device.laptop} {
    height: 25rem;
    border-right: none;
    border-bottom: 0.0625rem solid #E2E8F0;
  }
`;

export const DataSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem; /* 20px */
  background-color: #FFFFFF;
  border-top: 0.25rem solid #0369A1; /* 4px */
  padding: 2rem 1.5rem; /* 32px 24px */

  @media ${device.laptop} {
    padding: 1.5rem 1rem;
  }
`;

export const AnalysisTitle = styled.h3`
  margin: 0;
  font-size: 0.9rem;
  color: #0369A1;
  text-transform: uppercase;
  letter-spacing: 0.0625rem; /* 1px */
  font-weight: 700;
  border-bottom: 0.125rem solid #E2E8F0; /* 2px */
  padding-bottom: 0.5rem; /* 8px */
  display: flex;
  align-items: center;
  gap: 0.5rem; /* 8px */
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