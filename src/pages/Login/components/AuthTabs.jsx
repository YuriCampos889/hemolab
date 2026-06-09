import React from 'react';
import { TabsContainer, TabButton } from '../styles/form';

export default function AuthTabs({ activeTab, setActiveTab }) {
  return (
    <TabsContainer>
      <TabButton 
        className={activeTab === 'login' ? 'active' : ''}
        onClick={() => setActiveTab('login')}
        type="button"
      >
        LOGIN
      </TabButton>
      <TabButton 
        className={activeTab === 'register' ? 'active' : ''}
        onClick={() => setActiveTab('register')}
        type="button"
      >
        SIGN UP
      </TabButton>
    </TabsContainer>
  );
}