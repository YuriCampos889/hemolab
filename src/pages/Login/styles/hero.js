import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const HeroContent = styled.div`
  position: relative;
  z-index: 3;
`;

export const HeroTitle = styled.h1`
  font-size: 2.64rem;
  line-height: 1.08;
  color: #ffffff;
  font-weight: 300;
  margin-bottom: 1.2rem;
  letter-spacing: -0.05em;
  max-width: 33.6rem;

  @media ${device.laptop} {
    font-size: 2.08rem;
    max-width: 27.2rem;
  }

  span {
    color: #22d3ee;
    font-weight: 500;
  }
`;

export const HeroLine = styled.div`
  width: 3.6rem;
  height: 0.16rem;
  background: #22d3ee;
  border-radius: 999px;
  margin-bottom: 1.44rem;
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.5);
`;

export const BrandDescription = styled.p`
  max-width: 25.6rem;
  font-size: 0.86rem;
  color: rgba(255, 255, 255, 0.82);
  font-weight: 300;
  line-height: 1.9;
  text-align: left;

  @media ${device.laptop} {
    font-size: 0.8rem;
    max-width: 22.4rem;
  }
`;

export const FeaturesGrid = styled.div`
  display: flex;
  gap: 2.4rem;
  margin-top: 2.8rem;
  flex-wrap: wrap;
`;

export const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.64rem;
  color: white;
  opacity: 0.95;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  svg, img {
    color: #22d3ee;
    filter: drop-shadow(0 0 12px rgba(34, 211, 238, 0.4));
  }

  span {
    font-size: 0.75rem;
    max-width: 5.6rem;
    line-height: 1.4;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
  }
`;

// Parceiros
export const PartnersSection = styled.div`
  margin-top: 3.2rem;
  margin-left: -0.4rem;
  padding-top: 1.6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  max-width: 28.8rem;
`;

export const PartnersText = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
  margin-bottom: 1.2rem;
  letter-spacing: 0.02em;
`;

export const PartnersLogos = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const PartnerLogo = styled.img`
  height: 2.4rem;
  object-fit: contain;
  opacity: 0.85;
  transition: all 0.3s ease;
  filter: brightness(0) invert(1) drop-shadow(0 0 10px rgba(255, 255, 255, 0.08));

  &:hover {
    opacity: 1;
    transform: translateY(-1px);
  }

  &.lncc-logo {
    height: 3.2rem;
  }

  &.hemolab-logo {
    height: 3.6rem;
  }
`;