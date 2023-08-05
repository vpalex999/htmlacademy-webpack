import { createGlobalStyle } from 'styled-components';

const Color = {
  BLUE_10: 'var(--color-blue-10)',
  BLUE_20: 'var(--color-blue-20)',
  BLUE_30: 'var(--color-blue-30)',
  WHITE: 'var(--color-white)',
  GRAY_10: 'var(--color-gray-10)',
  GRAY_20: 'var(--color-gray-20)',
  GRAY_30: 'var(--color-gray-30)',
  GRAY_40: 'var(--color-gray-40)',
  GRAY_50: 'var(--color-gray-50)',
  GRAY_60: 'var(--color-gray-60)'
};

const Colors = createGlobalStyle`
  :root {
    --color-blue-10: #8FC8FD;
    --color-blue-20: #56AAF7;
    --color-blue-30: #2891F1;

    --color-white: #FFFFFF;
    --color-gray-10: #E9E9E9;
    --color-gray-20: #DFDFDF;
    --color-gray-30: #808080;
    --color-gray-40: #323334;
    --color-gray-50: #252626;
    --color-gray-60: #151515;
  }
`;

export { Color, Colors };
