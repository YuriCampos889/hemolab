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
  ThemeToggle,
  Divider
} from './styles';

import LNCClogo from '../../../assets/LNCClogo.png';
import GOVlogo from '../../../assets/hemolab_icon_neg.png';
import Trento from '../../../assets/logo.png';

export default function Header() {
  const navigate = useNavigate();
  
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
          <Divider />

          <GovLogoWrapper>
            <img src={GOVlogo} alt="Logo do Governo" className="logoGov-icon" />
          </GovLogoWrapper>
          <Divider />

          <TrentoLogo>
            <img src={Trento} alt="Logo Trento" className="logoTrento-icon" />
          </TrentoLogo>
        </LogoCluster>
        

      </Nav>
    </HeaderContainer>
  );
}