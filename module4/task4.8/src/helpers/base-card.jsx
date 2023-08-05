import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { Shadow } from '../tokens/shadows';

const StyledBaseCard = styled(Link)`
  display: flex;

  ${({ theme }) => theme.current === Theme.LIGHT ? css`
    background-color: ${Color.WHITE};
    box-shadow: ${Shadow.CARD};
  ` : css`
    background-color: ${Color.GRAY_40};
  `}

  &:hover,
  &:focus {
    box-shadow: ${Shadow.CARD_HOVER_FOCUS};
  }
`;

export {
  StyledBaseCard as BaseCard
};
