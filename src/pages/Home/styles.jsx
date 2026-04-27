import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px; 
`;

/* ==========================================
   HERO SECTION (CAROUSEL)
   ========================================== */
export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 48px;
  background-color: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03); 
  min-height: 600px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 24px;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 0; 
  overflow: hidden;
  position: relative;
  background-color: #F8F9FA;
  border: 1px solid #000000;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
`;

export const IconButton = styled.button`
  background-color: #F8F9FA;
  border: 1px solid #E2E8F0;
  color: #1A2B4C;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #DBEAFE;
    color: #0369A1;
    border-color: #DBEAFE;
  }
`;

export const DotsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? '#0369A1' : '#CBD5E1')};
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${fadeIn} 0.4s ease-out;

  margin-top: -300px; 
`;

export const ModuleTag = styled.span`
  display: inline-block;
  padding: 6px 14px;
  background-color: #F8F9FA;
  color: #0369A1;
  border: 1px solid #E2E8F0;
  font-size: 0.85rem;
  font-weight: 700;
  border-radius: 6px;
  width: fit-content;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Title = styled.h1`
  color: #1A2B4C;
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 16px 0;
  line-height: 1.2;
`;

export const Description = styled.p`
  color: #4A5568;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
`;

export const RecentActivityContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RecentActivityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #E2E8F0;
  padding-bottom: 12px;

  h3 {
    margin: 0;
    color: #1A2B4C;
    font-size: 1.25rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  svg {
    color: #0369A1;
  }
`;

export const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: #64748B;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.2s;

  &:hover {
    color: #0369A1;
  }
`;

export const RecentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
`;

export const RecentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-left: 4px solid #0369A1; 
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  min-height: 130px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`;

export const RecentCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const RecentCardTitle = styled.strong`
  color: #1A2B4C;
  font-size: 1.1rem;
`;

export const RecentCardMeta = styled.span`
  color: #64748B;
  font-size: 0.85rem;
`;

export const RecentCardStatus = styled.div`
  margin-top: auto;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 6px;
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: ${(props) => (props.$status === 'Done' || props.$status === 'Completed') ? '#DCFCE7' : '#F8F9FA'};
  color: ${(props) => (props.$status === 'Done' || props.$status === 'Completed') ? '#166534' : '#4A5568'};
  border: 1px solid ${(props) => (props.$status === 'Done' || props.$status === 'Completed') ? '#BBF7D0' : '#E2E8F0'};
`;