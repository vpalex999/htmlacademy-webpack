import React from 'react';
import styled from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { IconName } from '../tokens/icons';
import { BaseCard } from '../helpers/base-card';
import { TypographyVariant, Typography } from '../elements/typography';
import { Icon } from '../elements/icon';

const StyledServiceCard = styled.article`
  position: relative;

  width: 100%;
  height: 94px;

  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;

  @media (min-width: 768px) {
    height: 112px;
  }
`;

const StyledTitle = styled(Typography).attrs({
  as: 'h3',
  variant: TypographyVariant.TITLE_3
})`
  position: absolute;
  bottom: 6px;
  left: 6px;

  display: flex;
  align-items: center;
  padding: 2px;

  background-color: ${({ theme }) => theme.current === Theme.LIGHT ? Color.WHITE : Color.GRAY_50};
`;

const StyledArrow = styled(Icon).attrs({
  name: IconName.ARROW_RIGHT
})`
  margin-left: 2px;
`;

const StyledBaseCard = styled(BaseCard)`
  &:hover,
  &:focus {
    ${StyledTitle} {
      color: ${Color.BLUE_20};
    }
  }
`;

function ServiceCard({ className, title, image }) {
  return (
    <StyledBaseCard className={className} to='#'>
      <StyledServiceCard image={image}>
        <StyledTitle>
          {title}
          <StyledArrow />
        </StyledTitle>
      </StyledServiceCard>
    </StyledBaseCard>
  );
}

export { ServiceCard };
