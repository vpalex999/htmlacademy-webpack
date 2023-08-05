import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';

const ButtonSize = {
  MEDIUM: 'medium',
  LARGE: 'large'
};

const ButtonSizeToCSS = {
  [ButtonSize.MEDIUM]: css`
    padding: 5px 8px;

    font-size: 14px;
    line-height: 20px;
  `,
  [ButtonSize.LARGE]: css`
    padding: 8px 14px;

    font-size: 16px;
    line-height: 22px;
  `
};

const CSS = css`
  ${({ size }) => ButtonSizeToCSS[size]}

  color: ${Color.WHITE};

  background-color: ${Color.BLUE_20};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${Color.BLUE_10};
  }

  &:active {
    background-color: ${Color.BLUE_30};
  }

  &:disabled {
    ${({ theme }) => theme.current === Theme.LIGHT ? css`
      background-color: ${Color.GRAY_20};
    ` : css`
      color: ${Color.GRAY_40};

      background-color: ${Color.GRAY_30};
    `}

    cursor: not-allowed;
  }
`;

const StyledButton = styled.button.attrs(({ type, size }) => ({
  type: type || 'button',
  size: size || ButtonSize.MEDIUM
}))`${CSS}`;

const StyledLink = styled(Link).attrs(({ size }) => ({
  size: size || ButtonSize.MEDIUM
}))`${CSS}`;

export {
  ButtonSize,
  StyledButton as Button,
  StyledLink as Link
};
