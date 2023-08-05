import React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { BaseCard } from '../helpers/base-card';
import { TypographyVariant, Typography } from '../elements/typography';
import { Button } from '../elements/button';

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 130px;

  object-fit: cover;

  @media (min-width: 768px) {
    height: 100px;
  }
`;

const StyledLabels = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  left: 8px;

  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const StyledLabel = styled(Typography).attrs({
  variant: TypographyVariant.TEXT_2,
  color: Color.BLUE_20
})`
  border: 1px solid ${Color.BLUE_20};
  padding-right: 4px;
  padding-left: 4px;
`;

const StyledName = styled(Typography).attrs({
  as: 'h2',
  variant: TypographyVariant.TITLE_3
})`
  margin-bottom: 6px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const StyledPrice = styled(Typography).attrs({
  variant: TypographyVariant.TEXT_1,
  color: Color.GRAY_30
})``;

const StyledBuyButton = styled(Button)`
  align-self: end;
`;

const StyledProductCard = styled.article`
  position: relative;

  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 10px;
  width: 100%;
  padding: 10px;
  padding-top: 138px;

  @media (min-width: 768px) {
    padding-top: 108px;
  }

  ${({ theme, isNotAvailable }) => isNotAvailable && css`
    ${StyledImage} {
      opacity: 0.4;
    }

    ${theme.current === Theme.LIGHT ? css`
      ${StyledLabel} {
        border-color: ${Color.GRAY_20};

        color: ${Color.GRAY_20};
      }

      ${StyledName} {
        color: ${Color.GRAY_20};
      }

      ${StyledPrice} {
        color: ${Color.GRAY_20};
      }
    ` : css`
      ${StyledLabel} {
        border-color: ${Color.GRAY_30};

        color: ${Color.GRAY_30};
      }

      ${StyledName} {
        color: ${Color.GRAY_30};
      }
    `}
  `}
`;

function ProductCard({
  className,
  name,
  price,
  image,
  imageAlt,
  isHit,
  isNew,
  isNotAvailable
}) {
  return (
    <BaseCard className={className} to='#'>
      <StyledProductCard isNotAvailable={isNotAvailable}>
        <StyledImage src={image} alt={imageAlt} />
        <StyledLabels>
          {isHit && <StyledLabel>Хит</StyledLabel>}
          {isNew && <StyledLabel>Новинка</StyledLabel>}
        </StyledLabels>
        <div>
          <StyledName>{name}</StyledName>
          <StyledPrice>{price} ₽</StyledPrice>
        </div>
        <StyledBuyButton disabled={isNotAvailable}>
          Купить
        </StyledBuyButton>
      </StyledProductCard>
    </BaseCard>
  );
}

export { ProductCard };
