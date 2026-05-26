// src/styles/breakpoints.js

const size = {
    // Telas de notebooks pequenos e antigos (13 e 14 polegadas)
    laptop: '1366px',
    // Monitores padrão e notebooks maiores (15.6 polegadas)
    desktop: '1600px',
    // Monitores Full HD (Padrão ouro para PCs de mesa)
    desktopLarge: '1920px',
    // Monitores Ultrawide
    ultrawide: '2560px'
  };
  
  export const device = {
    laptop: `(max-width: ${size.laptop})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopLarge: `(max-width: ${size.desktopLarge})`,
    ultrawide: `(min-width: ${size.desktopLarge})`
  };