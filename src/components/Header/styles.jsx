import styled from 'styled-components';
import { Link } from 'react-router'; 

export const HeaderContainer = styled.header`
  position: absolute; 
  width: 100%;
  height: 65px;
  backdrop-filter: blur(92px);
  z-index: 100; 
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
`;

export const Nav = styled.nav`
  max-width: 2000px;
  margin: 0 auto;
  padding: 0 0.75rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 64px;
`;

export const LogoCluster = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-right: auto;
`;

export const LogoArea = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  
  .logo-icon {
    width: 150px;
    height: auto;
    display: block;
  }
`;

export const GovLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid rgba(255, 255, 255, 0.55);
  padding-left: 2rem;

  .logoGov-icon {
    width: 82px;
    height: auto;
    display: block;
  }
`;

export const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  .nav-link {
    text-decoration: none;
    color: white; 
    font-weight: 500;
    font-size: 0.95rem;
    transition: opacity 0.2s ease;
    
    &:hover {
      opacity: 0.8; 
    }
  }
`;