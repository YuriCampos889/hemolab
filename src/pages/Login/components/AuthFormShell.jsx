import React from 'react';
import { motion } from 'framer-motion';

import {
  TabContent,
  FormHeader,
  LoginForm as StyledForm,
  InputsContainer,
  FormActionsBottom
} from '../styles/form';

export default function AuthFormShell({
  children,
  actions,
  title,
  subtitle,
  onSubmit,
  motionKey,
  direction = 'left'
}) {
  return (
    <TabContent
      as={motion.div}
      key={motionKey}
      initial={{
        opacity: 0,
        x: direction === 'left' ? -10 : 10
      }}
      animate={{
        opacity: 1,
        x: 0
      }}
      exit={{
        opacity: 0,
        x: direction === 'left' ? 10 : -10
      }}
      transition={{ duration: 0.2 }}
    >
      <FormHeader>
        <h2>{title}</h2>

        {subtitle && (
          <p
            style={{
              marginTop: '0.5rem',
              fontSize: '0.875rem',
              color: '#64748b'
            }}
          >
            {subtitle}
          </p>
        )}
      </FormHeader>

      <StyledForm onSubmit={onSubmit}>
        <InputsContainer>
          {children}
        </InputsContainer>

        <FormActionsBottom>
          {actions}
        </FormActionsBottom>
      </StyledForm>
    </TabContent>
  );
}