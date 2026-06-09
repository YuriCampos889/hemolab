import React from 'react';
import styled, { css } from 'styled-components';

const TabContainer = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  width: 100%;
  
  ${(props) => props.$centered ? 'justify-content: center;' : 'justify-content: flex-start;'}
  
  ${(props) => props.$withBorder ? css`
    margin-bottom: 1.6rem;
    border-bottom: 0.1rem solid #E2E8F0;
    padding-bottom: 0.8rem;
  ` : css`
    margin-bottom: 1.2rem;
  `}
`;

const TabButton = styled.button`
  background-color: ${(props) => props.$active ? '#1A2B4C' : 'transparent'};
  color: ${(props) => props.$active ? '#FFFFFF' : '#4A5568'};
  border: 0.05rem solid ${(props) => props.$active ? '#1A2B4C' : '#CBD5E1'};
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  font-family: inherit;
  font-weight: 600;
  font-size: 0.72rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) => props.$readOnly && css`
    pointer-events: none;
  `}

  &:hover {
    background-color: ${(props) => props.$active ? '#0d1729' : '#F4F6F8'};
  }
`;

export default function Tabs({ 
  tabs = [], 
  activeTab, 
  onChange, 
  centered = false, 
  withBorder = false,
  readOnly = false 
}) {
  return (
    <TabContainer $centered={centered} $withBorder={withBorder}>
      {tabs.map((tab) => {
        const value = typeof tab === 'string' ? tab : tab.value;
        const label = typeof tab === 'string' ? tab : tab.label;
        const Icon = typeof tab === 'string' ? null : tab.icon;

        return (
          <TabButton
            key={value}
            type="button"
            $active={activeTab === value}
            $readOnly={readOnly}
            onClick={() => onChange && onChange(value)}
          >
            {Icon && <Icon size={14} />}
            {label}
          </TabButton>
        );
      })}
    </TabContainer>
  );
}