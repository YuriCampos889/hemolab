import React from 'react';
import styled, { css } from 'styled-components';

const baseStyles = css`
  margin: 0;
  color: inherit;
  color: #1A2B4C;
  font-weight: 800;
  width: 100%;
`;

const underlineStyles = css`
  /* 2px / 16 = 0.125rem */
  border-bottom: 0.125rem solid #8b2929;
  /* 12px / 16 = 0.75rem */
  padding-bottom: 0.75rem;
  /* 24px / 16 = 1.5rem */
  margin-bottom: 1.5rem;
`;

const StyledH2 = styled.h2`
  ${baseStyles}
  font-size: 1.8rem;
  ${(props) => props.$underline && underlineStyles}
`;

const StyledH3 = styled.h3`
  ${baseStyles}
  font-size: 1.5rem;
  ${(props) => props.$underline && underlineStyles}
`;

const StyledH4 = styled.h4`
  ${baseStyles}
  font-size: 1.1rem;
  ${(props) => props.$underline && underlineStyles}
`;

export default function Title({ children, level = 'h2', underline = false, ...props }) {
  if (level === 'h3') return <StyledH3 $underline={underline} {...props}>{children}</StyledH3>;
  if (level === 'h4') return <StyledH4 $underline={underline} {...props}>{children}</StyledH4>;
  return <StyledH2 $underline={underline} {...props}>{children}</StyledH2>;
}