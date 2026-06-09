import React from 'react';
import { motion } from 'framer-motion';

import AdavnLogo from '../../../assets/logo.beta.png';
import LnccLogo from '../../../assets/LNCClogo.png';
import HemolabLogo from '../../../assets/hemolab_icon_neg.png';
import TrentoLogo from '../../../assets/logo.png';
import LungIcon from '../../../assets/LungIcon.png';
import TransportIcon from '../../../assets/TransportIcon.png';

import {
  Heart,
  Brain,
} from 'lucide-react';

import { LeftPanel, LeftHemolabLogo } from '../styles/layout';
import {
  HeroContent,
  HeroTitle,
  HeroLine,
  BrandDescription,
  FeaturesGrid,
  FeatureItem,
  PartnersSection,
  PartnersLogos,
  PartnerLogo
} from '../styles/hero';

export default function BrandPanel() {
  return (
    <LeftPanel>
      
      {/* Logo */}
      <LeftHemolabLogo
        as={motion.img}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        src={AdavnLogo}
        alt="Adavn"
      />

      {/* Headline */}
      <HeroContent
        as={motion.div}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <HeroTitle>
          Technology Applied to <span>Cardiovascular Analysis</span>
        </HeroTitle>

        <HeroLine />

        <BrandDescription>
          Text Area Text Area Text Area Text Area Text Area Text Area Text Area Text Area Text Area Text Area Text Area Text Area
        </BrandDescription>
      </HeroContent>

      {/* Features */}
      <FeaturesGrid
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <FeatureItem>
          <Heart size={28} />
          <span>Feature 1 Feature 1</span>
        </FeatureItem>

        <FeatureItem>
          <img src={LungIcon} alt="Lungs" style={{ width: 28, height: 28 }} />
          <span>Feature 2 Feature 2</span>
        </FeatureItem>

        <FeatureItem>
          <img src={TransportIcon} alt="Transport" style={{ width: 28, height: 28 }} />
          <span>Feature3 Feature 3</span>
        </FeatureItem>

        <FeatureItem>
          <Brain size={28} />
          <span>Feature 4 Feature 4</span>
        </FeatureItem>
      </FeaturesGrid>

      {/* Partners */}
      <PartnersSection
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <PartnersLogos>
          <a href="https://lncc.br/index.php" target="_blank" rel="noopener noreferrer">
            <PartnerLogo src={LnccLogo} alt="LNCC" className="lncc-logo" />
          </a>
          <a href="http://hemolab.lncc.br/" target="_blank" rel="noopener noreferrer">
            <PartnerLogo src={HemolabLogo} alt="Hemolab" className="hemolab-logo" />
          </a>
          <a href="https://www.unitn.it/en" target="_blank" rel="noopener noreferrer">
            <PartnerLogo src={TrentoLogo} alt="Università di Trento" />
          </a>
        </PartnersLogos>
      </PartnersSection>
      
    </LeftPanel>
  );
}