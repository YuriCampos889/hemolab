import { FooterContainer, FooterText } from './styles';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer role="contentinfo">
      <FooterText>
      &copy; {currentYear} Hemodynamics Modeling Laboratory (HeMoLAB) - LNCC. All rights reserved.      </FooterText>
    </FooterContainer>
  );
}