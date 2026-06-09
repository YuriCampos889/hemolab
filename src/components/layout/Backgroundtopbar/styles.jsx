import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 8.5rem;
  overflow: hidden; 
  position: relative; 
  background-color: #ffffff;
  margin-bottom: -2.5rem; 
  z-index: 4;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(6, 65, 121, 0.9) 0%, rgba(249, 250, 250, 0.3) 50%);
    z-index: 3;
    pointer-events: none;

    @media (max-width: 768px) {
      background: linear-gradient(to right, rgba(6, 65, 121, 0.9) 0%, rgba(6, 65, 121, 0.8) 60%, rgba(249, 250, 250, 0.1) 100%);
    }
  }

  @media (max-width: 768px) {
    height: 7rem;
    margin-bottom: -2rem;
  }

  @media (max-width: 480px) {
    height: 5.5rem;
    margin-bottom: -1.5rem;
  }
`;

export const StyledImage = styled.img`
  width: 100%; 
  height: 100%; 
  object-fit: cover;
  display: block;
  object-position: center center;
  filter: blur(0rem);
  transform: translateY(0) scale(1.0) translateX(26%);

  @media (max-width: 768px) {
    transform: translateY(0) scale(1.0) translateX(10%);
  }

  @media (max-width: 480px) {
    transform: translateY(0) scale(1.0) translateX(0);
  }
`;

export const LogoOverlay = styled.img`
  position: absolute;
  left: 24%; 
  transform: translateX(-50%); 
  top: 0.2rem;
  height: 6.5rem;
  width: auto;
  object-fit: contain;
  z-index: 4;

  @media (max-width: 768px) {
    height: 5rem;
    left: 50%;
    top: 1.2rem;
  }

  @media (max-width: 480px) {
    height: 3.8rem;
    top: 0.8rem;
  }
`;