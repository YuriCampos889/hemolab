import styled from 'styled-components';
import { Link } from 'react-router'; 

export const HeaderContainer = styled.header`
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  height: 4.5rem;
  background: linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 100%);
  z-index: 100; 
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const LogoCluster = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Divider = styled.div`
  width: 0.0625rem;
  height: 2rem;
  background-color: rgba(255, 255, 255, 0.2); /* Use rgba(0,0,0, 0.2) se o fundo for claro */
  border-radius: 0.0625rem;
`;

export const LogoArea = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: scale(1.02);
    opacity: 0.9;
  }
  
  .logo-icon {
    width: 6.5rem;
    height: auto;
    object-fit: contain;
    display: block;
  }
`;

export const GovLogoWrapper = styled.div`
  display: flex; 
  align-items: center;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  .logoGov-icon {
    width: 7.5rem;
    height: auto;
    object-fit: contain;
    display: block;
  }
`;

export const TrentoLogo = styled.div`
  display: flex;
  align-items: center;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  .logoTrento-icon {
    width: 6.5rem; 
    height: auto;
    object-fit: contain;
    display: block;
  }
`;

export const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const ThemeToggle = styled.button`
  background: transparent;
  cursor: pointer;
  padding: 0;
  display: block;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  position: relative;
  transition: transform 0.2s ease;
  
  border: 0.2rem solid #000;

  background: ${props => props.isDarkMode 
    ? 'linear-gradient(to right, #fff 50%, #000 50%)' 
    : 'linear-gradient(to right, #000 50%, #fff 50%)'
  };

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    width: 45%; 
    height: 45%;
    border-radius: 50%;
    
    background: ${props => props.isDarkMode 
      ? 'linear-gradient(to right, #000 50%, #fff 50%)' 
      : 'linear-gradient(to right, #fff 50%, #000 50%)'
    };
  }

  &:hover {
    transform: scale(1.1);
  }
`;