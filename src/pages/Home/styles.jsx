import styled, { keyframes } from 'styled-components';
import { device } from '../../styles/breakpoints';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(0.5rem); /* 8px */ }
  to { opacity: 1; transform: translateY(0); }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  gap: 2rem; /* 32px */

  @media (max-width: 48rem) {
    gap: 1.5rem;
  }
`;

export const EmptyStateMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  text-align: center;
  color: #64748B;
  background-color: #F8FAFC;
  border: 0.05rem dashed #CBD5E1;
  border-radius: 0.6rem;
`;
export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  background: linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%);
  border: 0.05rem solid #E2E8F0;
  border-radius: 1rem;
  padding: 2.5rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.03);
  align-items: center;

  @media ${device.laptop} {
    grid-template-columns: 1fr;
    padding: 1.5rem;
    gap: 1.5rem;
  }

  @media (max-width: 30rem) {
    padding: 1rem;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* 16px */
  width: 100%;
`;

export const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 0.8rem; 
  overflow: hidden;
  position: relative;
  background-color: #F1F5F9;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.08);

  @media (max-width: 48rem) {
    aspect-ratio: 16 / 9;
  }
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
  padding: 1rem 0 0 0;
`;

export const IconButton = styled.button`
  background-color: #FFFFFF;
  border: 0.05rem solid #E2E8F0;
  color: #1A2B4C;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 0.1rem 0.2rem rgba(0,0,0,0.05);

  &:hover {
    color: #0369A1;
    background-color: #F1F5F9;
    transform: scale(1.05);
  }
`;

export const DotsWrapper = styled.div`
  display: flex;
  gap: 0.4rem; /* 6.4px */
`;

export const Dot = styled.button`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? '#0369A1' : '#CBD5E1')};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
  ${(props) => props.$active && `
    width: 1.2rem;
    border-radius: 1rem;
  `}
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  animation: ${fadeIn} 0.4s ease-out;
`;

export const ModuleTag = styled.span`
  display: inline-block;
  padding: 0.4rem 0.8rem;
  background-color: #E0F2FE;
  color: #0369A1;
  border: none;
  font-size: 0.72rem;
  font-weight: 700;
  border-radius: 1rem;
  width: fit-content;
  margin-bottom: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
`;

export const Title = styled.h1`
  color: #1A2B4C;
  font-size: 2.2rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  line-height: 1.2;

  @media (max-width: 48rem) {
    font-size: 1.8rem;
  }
  @media (max-width: 30rem) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  color: #4A5568;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 30rem) {
    font-size: 0.85rem;
  }
`;

export const RecentActivityContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background: #FFFFFF;
  border: 0.05rem solid #E2E8F0;
  border-radius: 0.8rem;
  padding: 1.5rem;
  box-shadow: 0 0.2rem 0.5rem rgba(0,0,0,0.02);

  @media (max-width: 30rem) {
    padding: 1rem;
  }
`;

export const RecentActivityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.05rem solid #E2E8F0;
  padding-bottom: 0.8rem;

  h3 {
    margin: 0;
    color: #1A2B4C;
    font-size: 1.1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    color: #0369A1;
  }

  @media (max-width: 30rem) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
`;

export const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: #64748B;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
  font-size: 0.8rem;
  transition: color 0.2s;

  &:hover {
    color: #0369A1;
  }

  @media (max-width: 30rem) {
    align-self: flex-start;
  }
`;

export const RecentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  gap: 1rem;

  @media (max-width: 30rem) {
    grid-template-columns: 1fr;
  }
`;

export const RecentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.2rem;
  background-color: #F8FAFC;
  border: 0.05rem solid #E2E8F0;
  border-left: 0.25rem solid #0369A1;
  border-radius: 0.6rem;
  transition: all 0.2s ease;
  cursor: pointer;
  min-height: 7rem;

  &:hover {
    background-color: #FFFFFF;
    transform: translateY(-0.2rem);
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.06);
    border-color: #CBD5E1;
    border-left-color: #0369A1;
  }
`;

export const RecentCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem; /* 3.2px */
`;

export const RecentCardTitle = styled.strong`
  color: #1A2B4C;
  font-size: 0.88rem; /* ~14px */
`;

export const RecentCardMeta = styled.span`
  color: #64748B;
  font-size: 0.68rem; /* ~10.8px */
`;

export const RecentCardStatus = styled.div`
  margin-top: auto;
  font-size: 0.6rem; /* 9.6px */
  font-weight: 700;
  padding: 0.2rem 0.5rem; /* 3.2px 8px */
  border-radius: 0.3rem; /* 4.8px */
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 0.025rem; /* 0.4px */
  background-color: ${(props) => (props.$status === 'Done' || props.$status === 'Completed') ? '#DCFCE7' : '#F8F9FA'};
  color: ${(props) => (props.$status === 'Done' || props.$status === 'Completed') ? '#166534' : '#4A5568'};
  border: 0.05rem solid ${(props) => (props.$status === 'Done' || props.$status === 'Completed') ? '#BBF7D0' : '#E2E8F0'}; /* 0.8px */
`;

export const MiddleGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;

  @media ${device.laptop} {
    grid-template-columns: 1fr;
  }
`;

export const SectionTitle = styled.h3`
  margin: 0 0 1.2rem 0;
  color: #1A2B4C;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  
  svg {
    color: #0369A1;
  }
`;

export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  width: 100%;
  margin: auto 0;

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 37.5rem) {
    grid-template-columns: 1fr;
  }
`;

export const OverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 0.05rem solid #E2E8F0;
  border-radius: 0.8rem;
  padding: 1.5rem;
  box-shadow: 0 0.2rem 0.5rem rgba(0,0,0,0.02);
  height: 100%;

  @media (max-width: 30rem) {
    padding: 1rem;
  }
`;

export const StatBox = styled.div`
  background: #07092713;
  border: 0.05rem solid #E2E8F0;
  border-radius: 0.8rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  transition: all 0.2s ease;

  &:hover {
    background: #FFFFFF;
    transform: translateY(-0.3rem);
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.05);
    border-color: #CBD5E1;
  }

  @media (max-width: 48rem) {
    padding: 1rem;
  }

  @media (max-width: 37.5rem) {
    flex-direction: row;
    align-items: center;
  }
`;

export const StatIconBox = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.6rem;
  background: ${(props) => props.$bg || '#F1F5F9'};
  color: ${(props) => props.$color || '#0369A1'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatDetails = styled.div`
  display: flex;
  flex-direction: column;
  h4 { margin: 0; font-size: 1.8rem; color: #1A2B4C; font-weight: 800; line-height: 1.2; }
  span { font-size: 0.8rem; color: #64748B; font-weight: 500; margin-top: 0.2rem; }

  @media (max-width: 48rem) {
    h4 { font-size: 1.5rem; }
  }
`;

export const QuickActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #FFFFFF;
  border: 0.05rem solid #E2E8F0;
  border-radius: 0.8rem;
  padding: 1.5rem;
  box-shadow: 0 0.2rem 0.5rem rgba(0,0,0,0.02);

  @media (max-width: 30rem) {
    padding: 1rem;
  }
`;

export const ActionLink = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  background: #F8FAFC;
  border: 0.05rem solid #E2E8F0;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  text-align: left;

  .arrow-icon {
    margin-left: auto;
    color: #CBD5E1;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  &:hover {
    background: #FFFFFF;
    border-color: #0369A1;
    transform: translateY(-0.1rem);
    box-shadow: 0 0.3rem 0.6rem rgba(3, 105, 161, 0.08);
    
    .arrow-icon {
      color: #0369A1;
      transform: translateX(0.2rem);
    }
  }

  span {
    font-weight: 600;
    color: #1A2B4C;
    font-size: 0.85rem;
  }
`;