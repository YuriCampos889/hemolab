import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.4rem;
  position: relative;
  width: 100%;
  margin-top: 5.6rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-top: 2rem;
    padding: 1.6rem;
  }
`;

export const AuthCard = styled.div`
  width: 100%;
  max-width: 31.2rem;
  height: 30rem;
  background: #ffffff;
  border-radius: 0.56rem;
  box-shadow: 0 1.6rem 3.2rem rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;

  @media ${device.laptop} {
    max-width: 28.8rem;
    height: 27.2rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
    min-height: 28rem;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  background: #1a2b4d;
  margin-bottom: 1.2rem;

  @media ${device.laptop} {
    margin-bottom: 0.8rem;
  }
`;

export const TabButton = styled.button`
  flex: 1;
  background: transparent !important;
  color: rgba(255, 255, 255, 0.7) !important;
  border: none;
  padding: 1.2rem 0.8rem;
  font-size: 0.76rem;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  transition: all 0.25s ease;
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 0.03em;

  @media ${device.laptop} {
    padding: 1rem 0.8rem;
  }

  &:hover {
    color: #ffffff !important;
    background: rgba(255, 255, 255, 0.04);
    filter: none;
  }

  &.active {
    color: #ffffff !important;
    background: rgba(255, 255, 255, 0.04);
  }

  &.active::after {
    display: none;
  }
`;

export const FormContent = styled.div`
  padding: 0 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  height: 100%;

  @media ${device.laptop} {
    padding: 0 1.2rem 1.2rem 1.2rem;
  }
`;

export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;

export const FormHeader = styled.div`
  h2 {
    font-size: 1.28rem;
    font-weight: 700;
    font-family: 'Inter', 'Poppins', sans-serif;
    letter-spacing: -0.03em;
    margin-bottom: 1.44rem;
    color: #143c58;
    margin-top: 0;

    @media ${device.laptop} {
      font-size: 1.08rem;
      margin-bottom: 0.96rem;
    }
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  min-height: 17rem;

  @media ${device.laptop} {
    min-height: 15.2rem;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.96rem;
  flex: 1;
  justify-content: center;

  @media ${device.laptop} {
    gap: 0.8rem;
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #ef4444;
  font-size: 0.7rem;
  font-weight: 500;
  margin-top: -0.4rem;

  p {
    margin: 0;
  }
`;

export const FormActionsBottom = styled.div`
  margin-top: auto;
  padding-top: 1.2rem;
  padding-bottom: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const FormFooterOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
  gap: 0.6rem;

  @media ${device.laptop} {
    margin-bottom: 0.6rem;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #1e293b;
  font-size: 0.7rem;
  cursor: pointer;
`;

export const ForgotPassword = styled.button`
  color: #0e3857;
  font-size: 0.7rem;
  font-weight: 600;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
    text-decoration: underline;
  }
`;