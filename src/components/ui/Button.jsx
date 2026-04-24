import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Loader2 } from 'lucide-react';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: ${(props) => props.$size === 'small' ? '8px 16px' : '14px 28px'};
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: ${(props) => props.$size === 'small' ? '0.85rem' : '1rem'};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: ${(props) => props.$fullWidth ? '100%' : 'auto'};
  border: none;

  ${(props) => props.$variant === 'primary' && css`
    background-color: #8b2929;
    color: #FFFFFF;
    &:hover:not(:disabled) {
      background-color: #6d1f1f;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(139, 41, 41, 0.25);
    }
  `}

  ${(props) => props.$variant === 'secondary' && css`
    background-color: #1A2B4C;
    color: #FFFFFF;
    &:hover:not(:disabled) {
      background-color: #0d1729;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(26, 43, 76, 0.25);
    }
  `}

  ${(props) => props.$variant === 'outline' && css`
    background-color: transparent;
    color: #4A5568;
    border: 1px solid #CBD5E1;
    &:hover:not(:disabled) {
      background-color: #F8F9FA;
      color: #1A2B4C;
      border-color: #1A2B4C;
    }
  `}

  &:disabled {
    background-color: #CBD5E1;
    color: #94A3B8;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    border-color: transparent;
  }

  svg.spinner {
    animation: ${rotate} 1s linear infinite;
  }
`;

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  ...props 
}) {
  return (
    <StyledButton 
      $variant={variant} 
      $size={size}
      $fullWidth={fullWidth}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <Loader2 size={20} className="spinner" />
      ) : (
        <>
          {leftIcon && leftIcon}
          {children}
          {rightIcon && rightIcon}
        </>
      )}
    </StyledButton>
  );
}