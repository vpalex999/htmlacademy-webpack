import React from 'react';
import styled, { css } from 'styled-components';
import { Color } from '../tokens/colors';
import { IconName } from '../tokens/icons';

const IconSize = {
  MEDIUM: 'medium',
  LARGE: 'large'
};

const IconNameToIconSize = {
  [IconName.ARROW_RIGHT]: IconSize.MEDIUM,
  [IconName.CHECK]: IconSize.MEDIUM,
  [IconName.CHEVRON_DOWN]: IconSize.MEDIUM,
  [IconName.MENU]: IconSize.LARGE,
  [IconName.TELEGRAM]: IconSize.MEDIUM,
  [IconName.THEME_TOGGLE]: IconSize.MEDIUM,
  [IconName.USER]: IconSize.MEDIUM,
  [IconName.VK]: IconSize.MEDIUM,
  [IconName.YOUTUBE]: IconSize.MEDIUM
};

const IconSizeToCSS = {
  [IconSize.MEDIUM]: css`
    width: 22px;
    height: 22px;
  `,
  [IconSize.LARGE]: css`
    width: 36px;
    height: 36px;
  `
};

const StyledIcon = styled.svg.attrs(({ color }) => ({
  color: color || Color.BLUE_20
}))`
  ${({ name }) => IconSizeToCSS[IconNameToIconSize[name]]}

  color: ${({ color }) => color};
`;

function Icon({ className, name, color }) {
  const xlinkHref = `#${name}`;

  return (
    <StyledIcon
      className={className}
      name={name}
      color={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <use xlinkHref={xlinkHref} />
    </StyledIcon>
  );
}

export { Icon };
