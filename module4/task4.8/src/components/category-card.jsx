import React from 'react';
import styled from 'styled-components';
import { Color } from '../tokens/colors';
import { BaseCard } from '../helpers/base-card';
import { TypographyVariant, Typography } from '../elements/typography';

const StyledCategoryCard = styled.article`
  position: relative;

  width: 100%;
  height: 94px;

  background-image: url(${({ image }) => image});
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    height: 112px;
  }
`;

const StyledTitle = styled(Typography).attrs({
  as: 'h3',
  variant: TypographyVariant.TITLE_3
})`
  position: absolute;
  top: 6px;
  right: 60px;
  left: 6px;
`;

const StyledBaseCard = styled(BaseCard)`
  &:hover,
  &:focus {
    ${StyledTitle} {
      color: ${Color.BLUE_20};
    }
  }
`;

function CategoryCard({ className, title, image }) {
  return (
    <StyledBaseCard className={className} to='#'>
      <StyledCategoryCard image={image}>
        <StyledTitle>{title}</StyledTitle>
      </StyledCategoryCard>
    </StyledBaseCard>
  );
}

export { CategoryCard };
