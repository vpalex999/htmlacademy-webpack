import { createGlobalStyle } from 'styled-components';

const Shadow = {
  HEADER: 'var(--shadow-header)',
  CARD: 'var(--shadow-card)',
  CARD_HOVER_FOCUS: 'var(--shadow-card-hover-focus)'
};

const Shadows = createGlobalStyle`
  :root {
    --shadow-header: 0 2px 20px rgba(0, 0, 0, 0.08);
    --shadow-card: 0 0 10px rgba(0, 0, 0, 0.07);
    --shadow-card-hover-focus: 0 0 10px rgba(86, 170, 247, 0.25);
  }
`;

export { Shadow, Shadows };
