import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const PageWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  background-image: linear-gradient(to right, transparent 100%, rgba(34, 211, 238, 0.08) 100%);
  overflow: visible;
  z-index: 2;
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
`;

export const BgVideo = styled.video`
  position: absolute;
  width: 75%;
  object-fit: cover;
  transform: translateX(7.2rem) translateY(-4rem);
  opacity: 1;

  @media ${device.laptop} {
    width: calc(100% - 25.6rem);
    transform: translateX(3.2rem);
  }

  @media (max-width: 768px) {
    width: 100%;
    transform: none;
  }
`;

export const BlurLeft = styled.div`
  position: absolute;
  inset: 0;
  width: 74.5%;
  z-index: 2;
  overflow: hidden;
  background: linear-gradient(
    to right,
    rgba(6, 28, 61, 0.98) 19%,
    rgba(8, 43, 92, 0.92) 35%,
    rgba(8, 43, 92, 0.55) 55%,
    transparent 100%
  );
  backdrop-filter: blur(0px);

  @media ${device.laptop} {
    width: calc(100% - 20.8rem);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top left, rgba(1, 221, 255, 0), transparent 40%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20%;
    left: -10%;
    width: 32rem;
    height: 32rem;
    background: radial-gradient(circle, rgba(34, 211, 238, 0.12), transparent 70%);
    filter: blur(80px);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BlurRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 40%;
  z-index: 3;
  overflow: hidden;
  background: linear-gradient(
    to left,
    rgb(194, 196, 196) 10%,
    rgb(194, 196, 196) 35%,
    rgb(194, 196, 196) 65%,
    transparent 100%
  );
  backdrop-filter: blur(1px);

  @media ${device.laptop} {
    width: 28rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    background: rgba(194, 196, 196, 0.4);
  }
`;

export const LoginGrid = styled.div`
  display: grid;
  grid-template-columns: 66% 32%;
  min-height: calc(100vh - 6rem);
  position: relative;
  z-index: 1;
  align-items: center;

  @media ${device.laptop} {
    grid-template-columns: 1fr 22.4rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const LeftPanel = styled.div`
  position: relative;
  padding-left: 4.8rem;
  max-width: 41.6rem;
  z-index: 3;

  @media ${device.laptop} {
    padding-left: 2.4rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LeftHemolabLogo = styled.img`
  width: 32rem;
  margin-bottom: -2.5rem;
  object-fit: contain;

  @media ${device.laptop} {
    width: 19.2rem;
  }

  @media (max-width: 768px) {
    width: 14rem;
  }
`;

export const BlurBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 12.8rem;
  background: radial-gradient(circle at bottom left, rgba(34, 211, 238, 0.12), transparent 65%);
  filter: blur(80px);
  pointer-events: none;
`;

export const BrandCopyright = styled.p`
  position: absolute;
  bottom: 0.8rem;
  left: 0.8rem;
  font-size: 0.56rem;
  color: #cccdce;
  text-align: left;
  margin: 0;
  padding: 0;
  z-index: 10;

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    left: 0;
  }
`;