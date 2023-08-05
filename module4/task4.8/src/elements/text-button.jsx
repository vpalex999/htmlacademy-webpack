import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { Icon } from './icon';

const TextButtonSize = {
  MEDIUM: 'medium',
  LARGE: 'large'
};

const TextButtonColor = {
  CONTRAST: 'contrast',
  ALWAYS_GRAY: 'always-gray'
};

const TextButtonSizeToCSS = {
  [TextButtonSize.MEDIUM]: css`
    font-size: 14px;
    line-height: 20px;
  `,
  [TextButtonSize.LARGE]: css`
    font-size: 16px;
    line-height: 22px;
  `
};

const TextButtonColorToCSS = {
  [TextButtonColor.CONTRAST]: css`
    color: ${({ theme }) => theme.current === Theme.LIGHT ? Color.GRAY_50 : Color.GRAY_10};

    svg {
      color: ${Color.BLUE_20};
    }
  `,
  [TextButtonColor.ALWAYS_GRAY]: css`
    color: ${Color.GRAY_30};

    svg {
      color: ${Color.GRAY_30};
    }
  `
};

const CSS = css`
  ${({ size }) => TextButtonSizeToCSS[size]}
  ${({ color }) => TextButtonColorToCSS[color]}

  display: inline-flex;
  align-items: center;

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${Color.BLUE_10};
  }

  &:active {
    color: ${Color.BLUE_30};
  }

  &:disabled {
    color: ${Color.GRAY_20};

    cursor: not-allowed;
  }

  &:hover,
  &:focus,
  &:active,
  &:disabled {
    svg {
      color: currentColor;
    }
  }
`;

const StyledTextButton = styled.button.attrs(({ type, size, color }) => ({
  type: type || 'button',
  size: size || TextButtonSize.MEDIUM,
  color: color || TextButtonColor.CONTRAST
}))`${CSS}`;

const StyledTextLink = styled(Link).attrs(({ size, color }) => ({
  size: size || TextButtonSize.MEDIUM,
  color: color || TextButtonColor.CONTRAST
}))`${CSS}`;

const StyledTextButtonIconLeft = styled(Icon)`
  margin-right: 4px;
`;

export {
  TextButtonSize,
  TextButtonColor,
  StyledTextButton as TextButton,
  StyledTextLink as TextLink,
  StyledTextButtonIconLeft as TextButtonIconLeft
};
