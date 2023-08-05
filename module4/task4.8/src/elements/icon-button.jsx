import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Color } from '../tokens/colors';

const IconButtonColor = {
  ACCENT: 'accent',
  ALWAYS_GRAY: 'always-gray'
};

const IconButtonColorToCSS = {
  [IconButtonColor.ACCENT]: css`
    color: ${Color.BLUE_20};
  `,
  [IconButtonColor.ALWAYS_GRAY]: css`
    color: ${Color.GRAY_30};
  `
};

const CSS = css`
  ${({ color }) => IconButtonColorToCSS[color]}

  display: inline-flex;

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

  svg {
    color: currentColor;
  }
`;

const StyledIconButton = styled.button.attrs(({ type, color }) => ({
  type: type || 'button',
  color: color || IconButtonColor.ACCENT
}))`${CSS}`;

const StyledIconLink = styled(Link).attrs(({ color }) => ({
  color: color || IconButtonColor.ACCENT
}))`${CSS}`;

export {
  IconButtonColor,
  StyledIconButton as IconButton,
  StyledIconLink as IconLink
};
