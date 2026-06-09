import React from 'react';
import styled, { css } from 'styled-components';

const StyledCard = styled.div`
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0rem 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.$padding || '2rem'};
  width: 100%;
  
  border: ${(props) => props.$noBorder ? 'none' : '0.0625rem solid #E2E8F0'};

  ${(props) => props.$variant === 'glass' && css`
    background: rgba(13, 24, 51, 0.75);
    backdrop-filter: blur(1.25rem);
    -webkit-backdrop-filter: blur(1.25rem);
    box-shadow: 0 1.5625rem 3.125rem -0.75rem rgba(0, 0, 0, 0.5);
    color: white;
    border: none; 
  `}
`;

export default function Card({ children, variant = 'default', padding, noBorder = false, ...props }) {
  return (
    <StyledCard 
      $variant={variant} 
      $padding={padding} 
      $noBorder={noBorder} 
      {...props}
    >
      {children}
    </StyledCard>
  );
}