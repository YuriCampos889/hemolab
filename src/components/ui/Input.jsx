import React, { useState, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { Eye, EyeOff } from 'lucide-react';

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
`;

const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 700;
  color: #1A2B4C;
  text-transform: ${(props) => props.$uppercase ? 'uppercase' : 'capitalize'};
  letter-spacing: ${(props) => props.$uppercase ? '0.05em' : 'normal'};
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const IconLeft = styled.div`
  position: absolute;
  left: 14px;
  color: ${(props) => (props.$hasValue ? '#1A2B4C' : '#94a3b8')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
  pointer-events: none;
`;

const IconRight = styled.div`
  position: absolute;
  right: 14px;
  color: #94a3b8;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: ${(props) => (props.$clickable ? 'pointer' : 'default')};
  transition: color 0.2s;

  &:hover {
    color: ${(props) => (props.$clickable ? '#1A2B4C' : '#94a3b8')};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 0.95rem;
  color: #2D3748;
  background-color: #F8F9FA;
  border: 1px solid #CBD5E1;
  border-radius: 6px;
  transition: all 0.2s ease;
  
  padding: 14px 16px;
  ${(props) => props.$hasLeftIcon && 'padding-left: 42px;'}
  ${(props) => props.$hasRightIcon && 'padding-right: 42px;'}

  &:focus {
    outline: none;
    border-color: #1A2B4C;
    background-color: #FFFFFF;
    box-shadow: 0 0 0 3px rgba(26, 43, 76, 0.1);
  }

  &::placeholder {
    color: #A0AEC0;
  }

  &:disabled {
    background-color: #E2E8F0;
    color: #94A3B8;
    cursor: not-allowed;
    border-color: #CBD5E1;
  }

  ${(props) => props.$hasError && css`
    border-color: #8b2929;
    background-color: #FFF5F5;
    &:focus {
      box-shadow: 0 0 0 3px rgba(139, 41, 41, 0.1);
    }
  `}
`;

const ErrorMessage = styled.span`
  color: #8b2929;
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 2px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Input = forwardRef(({ 
  label, 
  error, 
  leftIcon, 
  rightIcon, 
  type = 'text',
  fullWidth = true,
  uppercaseLabel = false,
  value,
  ...props 
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === 'password';

  const inputType = isPasswordType && showPassword ? 'text' : type;
  const hasValue = value !== undefined && value !== '';

  return (
    <InputGroup $fullWidth={fullWidth}>
      {label && <Label $uppercase={uppercaseLabel}>{label}</Label>}
      
      <InputWrapper>
        {leftIcon && (
          <IconLeft $hasValue={hasValue}>
            {leftIcon}
          </IconLeft>
        )}

        <StyledInput
          ref={ref}
          type={inputType}
          value={value}
          $hasLeftIcon={!!leftIcon}
          $hasRightIcon={!!rightIcon || isPasswordType}
          $hasError={!!error}
          {...props}
        />

        {isPasswordType ? (
          <IconRight 
            as="button" 
            type="button" 
            $clickable 
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </IconRight>
        ) : rightIcon ? (
          <IconRight>{rightIcon}</IconRight>
        ) : null}
      </InputWrapper>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputGroup>
  );
});

Input.displayName = 'Input';

export default Input;