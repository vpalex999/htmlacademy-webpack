import React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { Shadow } from '../tokens/shadows';
import { IconName } from '../tokens/icons';
import { Container } from './container';
import { Logo } from '../elements/logo';
import { Icon } from '../elements/icon';
import { IconButton } from '../elements/icon-button';
import { TextButtonSize, TextLink, TextButtonIconLeft } from '../elements/text-button';

const StyledHeader = styled.header`
  ${({ theme }) => theme.current === Theme.LIGHT ? css`
    background-color: ${Color.WHITE};
    box-shadow: ${Shadow.HEADER};
  ` : css`
    background-color: ${Color.GRAY_60};
  `}
`;

const StyledNavigation = styled(Container).attrs({
  as: 'nav'
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  @media (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const StyledLogo = styled(Logo)`
  flex-shrink: 0;
`;

const StyledMenuButton = styled(IconButton)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledLinkList = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const StyledLinkItem = styled.li`
  margin-right: 16px;
  margin-left: 16px;
`;

const StyledLink = styled(TextLink).attrs({
  size: TextButtonSize.LARGE
})``;

const StyledProfileLink = styled(StyledLink)`
  display: none;

  @media (min-width: 768px) {
    display: inline-flex;
    flex-shrink: 0;
  }
`;

function Header({ className }) {
  return (
    <StyledHeader className={className}>
      <StyledNavigation>

        <StyledLogo />

        <StyledMenuButton>
          <Icon name={IconName.MENU} />
        </StyledMenuButton>

        <StyledLinkList>
          <StyledLinkItem>
            <StyledLink to='/catalog'>Товары</StyledLink>
          </StyledLinkItem>
          <StyledLinkItem>
            <StyledLink to='#'>Услуги</StyledLink>
          </StyledLinkItem>
          <StyledLinkItem>
            <StyledLink to='#'>Каталог</StyledLink>
          </StyledLinkItem>
        </StyledLinkList>

        <StyledProfileLink to='#'>
          <TextButtonIconLeft name={IconName.USER} />
          Профиль
        </StyledProfileLink>

      </StyledNavigation>
    </StyledHeader>
  );
}

export { Header };
