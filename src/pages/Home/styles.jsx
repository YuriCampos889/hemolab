import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(0.625rem); /* 10px */ }
  to { opacity: 1; transform: translateY(0); }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.5rem; /* 40px */
`;

export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem; /* 48px */
  background-color: #FFFFFF;
  border: 0.0625rem solid #E2E8F0; /* 1px */
  border-radius: 0.75rem; /* 12px */
  padding: 2.5rem; /* 40px */
  box-shadow: 0 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.05), 0 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.03); /* 4px 6px -1px, 2px 4px -1px */
  min-height: 37.5rem; /* 600px */
  align-items: center;

  @media (max-width: 56.25rem) { /* 900px */
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 1.5rem; /* 24px */
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem; /* 20px */
  width: 100%;
`;

export const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 0; 
  overflow: hidden;
  position: relative;
  background-color: #F8F9FA;
  border: 0.0625rem solid #000000; /* 1px */
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
  padding: 0 0.25rem; /* 4px */
`;

export const IconButton = styled.button`
  background-color: #F8F9FA;
  border: 0.0625rem solid #E2E8F0; /* 1px */
  color: #1A2B4C;
  width: 2.5rem; /* 40px */
  height: 2.5rem; /* 40px */
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
  gap: 0.5rem; /* 8px */
`;

export const Dot = styled.button`
  width: 0.625rem; /* 10px */
  height: 0.625rem; /* 10px */
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

  margin-top: -18.75rem; /* -300px */
`;

export const ModuleTag = styled.span`
  display: inline-block;
  padding: 0.375rem 0.875rem; /* 6px 14px */
  background-color: #F8F9FA;
  color: #0369A1;
  border: 0.0625rem solid #E2E8F0; /* 1px */
  font-size: 0.85rem;
  font-weight: 700;
  border-radius: 0.375rem; /* 6px */
  width: fit-content;
  margin-bottom: 1.25rem; /* 20px */
  text-transform: uppercase;
  letter-spacing: 0.03125rem; /* 0.5px */
`;

export const Title = styled.h1`
  color: #1A2B4C;
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 1rem 0; /* 16px */
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
  gap: 1.25rem; /* 20px */
`;

export const RecentActivityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.125rem solid #E2E8F0; /* 2px */
  padding-bottom: 0.75rem; /* 12px */

  h3 {
    margin: 0;
    color: #1A2B4C;
    font-size: 1.25rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.5rem; /* 8px */
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
  gap: 0.375rem; /* 6px */
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.2s;

  &:hover {
    color: #0369A1;
  }
`;

export const RecentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr)); /* 320px */
  gap: 1.25rem; /* 20px */
`;

export const RecentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25rem; /* 20px */
  background-color: #FFFFFF;
  border: 0.0625rem solid #E2E8F0; /* 1px */
  border-left: 0.25rem solid #0369A1; /* 4px */
  border-radius: 0.5rem; /* 8px */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  min-height: 8.125rem; /* 130px */

  &:hover {
    transform: translateY(-0.125rem); /* -2px */
    box-shadow: 0 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1); /* 4px 6px -1px */
  }
`;

export const RecentCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem; /* 4px */
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
  padding: 0.25rem 0.625rem; /* 4px 10px */
  border-radius: 0.375rem; /* 6px */
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 0.03125rem; /* 0.5px */
  background-color: ${(props) => (props.$status === 'Done' || props.$status === 'Completed') ? '#DCFCE7' : '#F8F9FA'};
  color: ${(props) => (props.$status === 'Done' || props.$status === 'Completed') ? '#166534' : '#4A5568'};
  border: 0.0625rem solid ${(props) => (props.$status === 'Done' || props.$status === 'Completed') ? '#BBF7D0' : '#E2E8F0'}; /* 1px */
`;