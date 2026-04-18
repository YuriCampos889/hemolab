import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { 
  HeaderContainer, 
  Nav, 
  LogoArea, 
  DesktopMenu, 
  GovLogoWrapper, 
  LogoCluster,
  TrentoLogo,
  ThemeToggle
} from './styles';

import LNCClogo from '../../assets/LNCClogo.png';
import GOVlogo from '../../assets/hemolab_icon_neg.png';
import Trento from '../../assets/logo.png';

export default function Header() {
  const navigate = useNavigate();
  
  // Estado local para o botão saber qual versão do ícone mostrar
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <HeaderContainer>
      <Nav>
        <LogoCluster>
          <LogoArea to="/">
            <img src={LNCClogo} alt="LNCC logo" className="logo-icon" />
          </LogoArea>

          <GovLogoWrapper>
            <img src={GOVlogo} alt="Logo do Governo" className="logoGov-icon" />
          </GovLogoWrapper>

          <TrentoLogo>
            <img src={Trento} alt="Logo Trento" className="logoTrento-icon" />
          </TrentoLogo>
        </LogoCluster>
        
        <DesktopMenu>
          <ThemeToggle 
            isDarkMode={isDarkMode} 
            onClick={toggleTheme} 
            aria-label="Alternar tema"
          />
        </DesktopMenu>
      </Nav>
    </HeaderContainer>
  );
}