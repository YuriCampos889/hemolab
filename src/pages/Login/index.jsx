import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { PageWrapper, LoginGrid, BrandCopyright } from './styles/layout';
import { FormSection, AuthCard, FormContent } from './styles/form';

import VideoBackground from './components/VideoBackground';
import BrandPanel from './components/BrandPanel';
import AuthTabs from './components/AuthTabs';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';

import useAuth from '../../hooks/UseAuth';

export default function Login() {
  const { login, register, status } = useAuth();
  const [activeTab, setActiveTab] = useState('login');

  return (
    <PageWrapper>
      <VideoBackground />

      <LoginGrid>
        <BrandPanel />

        <FormSection as={motion.div}>
          <AuthCard>
            <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            <FormContent>
              <AnimatePresence mode="wait">
                {activeTab === 'login' && (
                  <LoginForm
                    key="login"
                    login={login}
                    status={status}
                    onForgotClick={() => setActiveTab('forgot')}
                  />
                )}
                {activeTab === 'register' && (
                  <RegisterForm
                    key="register"
                    register={register}
                    status={status}
                  />
                )}
                {activeTab === 'forgot' && (
                  <ForgotPasswordForm
                    key="forgot"
                    onBack={() => setActiveTab('login')}
                  />
                )}
              </AnimatePresence>
            </FormContent>
          </AuthCard>
        </FormSection>
      </LoginGrid>

      <BrandCopyright>
        &copy; {new Date().getFullYear()} Hemodynamics Modeling Laboratory (HeMoLAB) - LNCC. All rights reserved.
      </BrandCopyright>
    </PageWrapper>
  );
}