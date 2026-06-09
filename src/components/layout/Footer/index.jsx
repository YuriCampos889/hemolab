import React from 'react';
import { FooterContainer, FooterContent, FooterTop, FooterText, FooterLogos } from './styles';

import LnccLogo from '../../../assets/LNCClogo.png';
import HemolabLogo from '../../../assets/hemolab_icon_neg.png';
import TrentoLogo from '../../../assets/logo.png';

export default function Footer({ variant, align }) {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer role="contentinfo" $align={align}>
      <FooterContent>
        <FooterTop>
          <FooterLogos>
            <a href="https://lncc.br/index.php" target="_blank" rel="noopener noreferrer">
              <img src={LnccLogo} alt="LNCC" />
            </a>
            <a href="http://hemolab.lncc.br/" target="_blank" rel="noopener noreferrer">
              <img src={HemolabLogo} alt="HeMoLab" />
            </a>
            <a href="https://www.unitn.it/en" target="_blank" rel="noopener noreferrer">
              <img src={TrentoLogo} alt="Trento" />
            </a>
          </FooterLogos>

          <FooterText $variant={variant}>
            &copy; {currentYear} Hemodynamics Modeling Laboratory (HeMoLab) - LNCC. All rights reserved.
          </FooterText>
        </FooterTop>
      </FooterContent>
    </FooterContainer>
  );
}