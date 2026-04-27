import styled from 'styled-components';
import { Link } from 'react-router'; 

export const HeaderContainer = styled.header`
  position: absolute; 
  width: 100%;
  height: 60px;

  backdrop-filter: blur(0px);
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
  gap: 1.5rem;
  margin-left: 100px;
  margin-right: auto;
`;

export const LogoArea = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  
  .logo-icon {
    width: 130px;
    height: auto;
    display: block;
  }
`;

export const GovLogoWrapper = styled.div`
  display: flex; 
  align-items: center;

  .logoGov-icon {
    width: 150px;
    height: auto;
    display: block;
  }
`;

export const TrentoLogo = styled.div`
  display: flex;
  align-items: center;

  .logoTrento-icon {
    width: 130px; 
    height: auto;
    display: block;
  }
`;

export const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

// === ÍCONE DARK MODE ===
export const ThemeToggle = styled.button`
  background: transparent;
  cursor: pointer;
  padding: 0;
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: relative;
  transition: transform 0.2s ease;
  
  border: 4px solid #000;

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