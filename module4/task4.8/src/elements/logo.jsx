import React from 'react';
import { Link } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { Theme } from '../theme';
import logoLight from '../imgs/logo-light.svg';
import logoDark from '../imgs/logo-dark.svg';

const StyledLogo = styled(Link)`
  position: relative;

  width: 86px;
  height: 29px;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

function Logo({ className }) {
  const theme = useTheme();
  const image = theme.current === Theme.LIGHT ? logoLight : logoDark;

  return (
    <StyledLogo className={className} to='/'>
      <StyledImage src={image} alt='Логотип оптики «Зоркий»' />
    </StyledLogo>
  );
}

export { Logo };
