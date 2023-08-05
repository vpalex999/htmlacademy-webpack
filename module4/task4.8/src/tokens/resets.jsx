import { createGlobalStyle } from 'styled-components';
import { Font } from './fonts';

const Resets = createGlobalStyle`
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;

    border: none;
    border-radius: 0;

    background: none;
    box-shadow: none;
  }

  body {
    font-family: ${Font.MANROPE};
    font-weight: 500;
  }

  button,
  input,
  select {
    font: inherit;
  }

  a {
    text-decoration: none;
  }

  ol,
  ul,
  dl {
    list-style: none;
  }
`;

export { Resets };
