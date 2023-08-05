import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';

const TypographyVariant = {
  TITLE_1: 'title-1',
  TITLE_2: 'title-2',
  TITLE_3: 'title-3',
  TEXT_1: 'text-1',
  TEXT_2: 'text-2'
};

const TypographyVariantToCSS = {
  [TypographyVariant.TITLE_1]: css`
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
  `,
  [TypographyVariant.TITLE_2]: css`
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
  `,
  [TypographyVariant.TITLE_3]: css`
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
  `,
  [TypographyVariant.TEXT_1]: css`
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  `,
  [TypographyVariant.TEXT_2]: css`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  `
};

const StyledTypography = styled.div.attrs(({ theme, color }) => {
  const defaultColor = theme.current === Theme.LIGHT
    ? Color.GRAY_50
    : Color.GRAY_10;

  return {
    color: color || defaultColor
  };
})`
  ${({ variant }) => TypographyVariantToCSS[variant]}

  color: ${({ color }) => color};
`;

export {
  TypographyVariant,
  StyledTypography as Typography
};
