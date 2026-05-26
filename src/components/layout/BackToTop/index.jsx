import React from 'react';
import { BackToTopButton } from './styles';

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <BackToTopButton 
      type="button" 
      onClick={scrollToTop}
      style={{ 
        width: '100vw', 
        maxWidth: '100vw', 
        marginLeft: 'calc(50% - 50vw)', 
        marginRight: 'calc(50% - 50vw)', 
        marginTop: 'auto',
        borderRadius: '0',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      Back to top
    </BackToTopButton>
  );
}