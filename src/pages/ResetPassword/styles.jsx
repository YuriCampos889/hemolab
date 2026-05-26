import styled from 'styled-components';

export const ResetContainer = styled.div`
  flex: 1;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #F1F5F9;
  overflow: hidden;

  @media (max-width: 48rem) {
    min-height: 100vh;
    overflow-y: auto;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  zoom: 0.8;

  @media (max-width: 48rem) {
    zoom: 1;
  }
`;

export const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 0;
`;

export const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #F8FAFC;
  color: #1A2B4C;
  margin-bottom: 1.2rem;
  box-shadow: 0 0.4rem 0.6rem rgba(26, 43, 76, 0.05);
  border: 0.05rem solid #E2E8F0;
`;

export const ImagePanel = styled.div`
  flex: 1;
  position: relative;
  display: none;
  background-image: url(${(props) => props.$bg});
  background-size: cover;
  background-position: center;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    backdrop-filter: blur(0.25rem);
    background-color: rgba(26, 43, 76, 0.1); 
  }

  @media (min-width: 56.25rem) {
    display: block;
  }
`;

export const FormPanel = styled.div`
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 32rem;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 48rem) {
    padding: 2rem 1.5rem;
  }
  
  @media (max-width: 30rem) {
    padding: 1.5rem 1rem;
  }
`;