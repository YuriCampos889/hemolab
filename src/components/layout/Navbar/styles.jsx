import styled from 'styled-components';

export const NavContainer = styled.div`
  position: relative; 
  display: flex;
  align-items: center;
  justify-content: center; 
  padding: 0; 
  height: 2.8125rem;
  background-color: #1A2B4C; 
  box-shadow: 0 0.1125rem 0.28125rem rgba(0, 0, 0, 0.15); 
  z-index: 10; 
  
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 48rem) {
    height: auto;
    min-height: 3.2rem;
  }
`;

export const NavGroupCenter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  height: 100%; 
  width: 100%; 
  max-width: 75rem; 
  margin: 0 auto; 
  padding: 0 2.5rem; 
  z-index: 2; 

  @media (max-width: 48rem) {
    padding: 0.5rem 1rem;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem; 
  position: relative;
  z-index: 1;

  &:first-child { margin-left: -0.84375rem; }
  &:last-child { margin-right: -0.84375rem; }

  @media (max-width: 48rem) {
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    
    &:first-child { margin-left: 0; }
    &:last-child { margin-right: 0; }
  }
`;

export const NavItem = styled.div`
  color: #FFFFFF; 
  font-size: 0.7875rem; 
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05625rem; 
  cursor: pointer;
  padding: 0.5625rem 0.84375rem; 
  transition: all 0.2s ease;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: rgba(244, 246, 248, 0.15); 
    border-radius: 0.3375rem; 
  }

  @media (max-width: 48rem) {
    font-size: 0.65rem;
    padding: 0.4rem 0.6rem;
    text-align: center;
  }
`;