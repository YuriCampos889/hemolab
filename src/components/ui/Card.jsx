import React from 'react';
import styled, { css } from 'styled-components';

const StyledCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.$padding || '32px'};
  width: 100%;
  border: 1px solid #E2E8F0;

  ${(props) => props.$variant === 'glass' && css`
    background: rgba(13, 24, 51, 0.75);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 10px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    color: white;
  `}
`;

export default function Card({ children, variant = 'default', padding, ...props }) {
  return (
    <StyledCard $variant={variant} $padding={padding} {...props}>
      {children}
    </StyledCard>
  );
}