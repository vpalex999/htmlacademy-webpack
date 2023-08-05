import { createGlobalStyle } from 'styled-components';

const Gradient = {
  BANNER_LIGHT: 'var(--gradient-banner-light)',
  BANNER_DARK: 'var(--gradient-banner-dark)'
};

const Gradients = createGlobalStyle`
  :root {
    --gradient-banner-light: linear-gradient(
      to right,
      rgba(243, 244, 246, 1) 0%,
      rgba(243, 244, 246, 0.85) 70%,
      rgba(243, 244, 246, 0.1) 100%
    );

    --gradient-banner-dark: linear-gradient(
      to right,
      rgba(27, 27, 27, 1) 0%,
      rgba(27, 27, 27, 0.6) 70%,
      rgba(27, 27, 27, 0.1) 100%
    );
  }
`;

export { Gradient, Gradients };
