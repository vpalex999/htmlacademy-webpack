import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { Gradient } from '../tokens/gradients';
import { Container } from './container';
import { TypographyVariant, Typography } from '../elements/typography';
import { ButtonSize, Link } from '../elements/button';

const StyledBanner = styled(Container)`
  position: relative;
`;

const StyledImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;
`;

const StyledContentOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;

  width: 320px;

  background-image: ${({ theme }) => theme.current === Theme.LIGHT ? Gradient.BANNER_LIGHT : Gradient.BANNER_DARK};
`;

const StyledContent = styled.div`
  position: relative;
  z-index: 1;

  width: 280px;
  padding-top: 54px;
  padding-bottom: 54px;
`;

const StyledTitle = styled(Typography)`
  margin-bottom: 18px;
`;

const StyledText = styled(Typography)`
  margin-bottom: 30px;
`;

function Banner({ className, title, text, image }) {
  const theme = useTheme();
  const textColor = theme.current === Theme.LIGHT ? Color.GRAY_40 : Color.GRAY_20;

  return (
    <StyledBanner className={className} as='article'>
      <StyledImage image={image} />
      <StyledContentOverlay />
      <StyledContent>
        <StyledTitle as='h2' variant={TypographyVariant.TITLE_1} color={Color.BLUE_20}>
          {title}
        </StyledTitle>
        <StyledText variant={TypographyVariant.TEXT_1} color={textColor}>
          {text}
        </StyledText>
        <Link size={ButtonSize.LARGE} to='#'>
          Подробнее
        </Link>
      </StyledContent>
    </StyledBanner>
  );
}

export { Banner };
