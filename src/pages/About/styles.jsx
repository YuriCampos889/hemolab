import styled from 'styled-components';

export const IntroText = styled.div`
  background-color: #ffffff;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  padding: 24px 32px;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #4A5568;
  margin-bottom: 32px;
  text-align: center;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
`;

export const FaqContainer = styled.div`
  background-color: #4A235A;
  border-radius: 8px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 15px -3px rgba(74, 35, 90, 0.3);
`;

export const FaqHeader = styled.h3`
  margin: 0 0 24px 0;
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const FaqItem = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  margin-bottom: 8px;
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

export const FaqQuestion = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  color: ${(props) => (props.$isOpen ? '#ffffff' : 'rgba(255, 255, 255, 0.85)')};
  font-size: 1.05rem;
  font-weight: 600;
  padding: 16px 8px;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
  }
`;

export const FaqAnswer = styled.div`
  max-height: ${(props) => (props.$isOpen ? '300px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
              opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              padding 0.3s ease;
  opacity: ${(props) => (props.$isOpen ? '1' : '0')};
  padding: ${(props) => (props.$isOpen ? '0 8px 16px 8px' : '0 8px')};

  p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.75);
    font-weight: 400;
  }
`;