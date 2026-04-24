import React from 'react';
import styled, { css } from 'styled-components';

const TabContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  width: 100%;
  
  ${(props) => props.$centered ? 'justify-content: center;' : 'justify-content: flex-start;'}
  
  ${(props) => props.$withBorder ? css`
    margin-bottom: 32px;
    border-bottom: 2px solid #E2E8F0;
    padding-bottom: 16px;
  ` : css`
    margin-bottom: 24px;
  `}
`;

const TabButton = styled.button`
  background-color: ${(props) => props.$active ? '#1A2B4C' : 'transparent'};
  color: ${(props) => props.$active ? '#FFFFFF' : '#4A5568'};
  border: 1px solid ${(props) => props.$active ? '#1A2B4C' : '#CBD5E1'};
  padding: 10px 20px;
  border-radius: 6px;
  font-family: inherit;
  font-weight: 600;
  font-size: 0.9rem;
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

        return (
          <TabButton
            key={value}
            type="button"
            $active={activeTab === value}
            $readOnly={readOnly}
            onClick={() => onChange && onChange(value)}
          >
            {label}
          </TabButton>
        );
      })}
    </TabContainer>
  );
}