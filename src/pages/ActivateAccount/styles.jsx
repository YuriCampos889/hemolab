import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #F8FAFC;
  padding: 20px;
`;

export const Container = styled.div`
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 40px 32px;
  max-width: 440px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: #1A2B4C;
  font-weight: 700;
  margin: 0 0 24px;
`;

export const SuccessMessage = styled.p`
  font-size: 0.95rem;
  color: #16A34A;
  line-height: 1.6;
  margin: 16px 0;
`;

export const ErrorMessage = styled.p`
  font-size: 0.95rem;
  color: #DC2626;
  line-height: 1.6;
  margin: 16px 0;
`;

export const LoadingMessage = styled.p`
  font-size: 0.95rem;
  color: #64748B;
  line-height: 1.6;
  margin: 16px 0;
`;

export const RedirectText = styled.p`
  margin-top: 20px;
  font-size: 12px;
  color: #64748B;
`;

export const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid #E2E8F0;
  border-top: 4px solid #0369A1;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 24px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;