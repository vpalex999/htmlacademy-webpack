import { createGlobalStyle } from 'styled-components';
import manropeMedium from '../fonts/manrope-medium.woff2';
import manropeBold from '../fonts/manrope-bold.woff2';

const Font = {
  MANROPE: 'var(--font-manrope)'
};

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Manrope';
    font-weight: 500;
    font-style: normal;
    font-display: swap;

    src: url(${manropeMedium});
  }

  @font-face {
    font-family: 'Manrope';
    font-weight: 700;
    font-style: normal;
    font-display: swap;

    src: url(${manropeBold});
  }

  :root {
    --font-manrope: 'Manrope', Arial, sans-serif;
  }
`;

export { Font, Fonts };
