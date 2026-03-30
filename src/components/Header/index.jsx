import { Link, useNavigate } from 'react-router';
// Ícones removidos (Menu, X, LogOut) pois eram usados apenas no mobile
import { 
  HeaderContainer, 
  Nav, 
  LogoArea, 
  DesktopMenu, 
  GovLogoWrapper, 
  LogoCluster 
} from './styles';

import LNCClogo from '../../assets/LNCClogo.png';
import GOVlogo from '../../assets/Gov.br_logo.png';

export default function Header() {
  const navigate = useNavigate();

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
        </LogoCluster>
        
        <DesktopMenu>
          <Link to="/" className="nav-link">PT-BR</Link>
          <Link to="/modelos" className="nav-link">Log: USER</Link>
        </DesktopMenu>
      </Nav>
    </HeaderContainer>
  );
}