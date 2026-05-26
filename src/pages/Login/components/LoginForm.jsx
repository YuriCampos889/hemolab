import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, AlertCircle, EyeOff, ArrowRight } from 'lucide-react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

import { 
  TabContent, 
  FormHeader, 
  LoginForm as StyledForm, 
  InputsContainer, 
  ErrorMessage, 
  FormActionsBottom, 
  FormFooterOptions, 
  CheckboxLabel, 
  ForgotPassword 
} from '../styles/form';

export default function LoginForm({ login, status, onForgotClick }) {
  return (
    <TabContent
      as={motion.div}
      key="login"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{ duration: 0.2 }}
    >
      <FormHeader>
        <h2>Welcome Back</h2>
      </FormHeader>

      <StyledForm onSubmit={login.handleSubmit}>
        <InputsContainer>
          <Input 
            label="Email" 
            type="email" 
            name="email" 
            value={login.data.email} 
            onChange={login.handleChange} 
            placeholder="example@email.com" 
            leftIcon={<Mail size={18} />} 
            required 
          />
          
          <Input 
            label="Password" 
            type="password" 
            name="password" 
            value={login.data.password} 
            onChange={login.handleChange} 
            placeholder="••••••••" 
            leftIcon={<Lock size={18} />} 
            rightIcon={<EyeOff size={18} />}
            required 
          />

          {status?.error && (
            <ErrorMessage
              as={motion.div}
              initial={{ opacity: 0, y: -5 }} 
              animate={{ opacity: 1, y: 0 }}
            >
              <AlertCircle size={16} />
              <p>{status.error}</p>
            </ErrorMessage>
          )}
        </InputsContainer>

        <FormActionsBottom>
          <FormFooterOptions>
            <CheckboxLabel>
              <input type="checkbox" />
              <span>Remember me</span>
            </CheckboxLabel>

            <ForgotPassword 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onForgotClick();
              }}
            >
              Forgot Password?
            </ForgotPassword>
          </FormFooterOptions>

          <Button 
            type="submit" 
            variant="secondary" 
            fullWidth 
            isLoading={status?.isLoading} 
            rightIcon={<ArrowRight size={18} />}
          >
            SIGN IN
          </Button>
        </FormActionsBottom>
      </StyledForm>
    </TabContent>
  );
}