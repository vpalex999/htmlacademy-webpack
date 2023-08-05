import React from 'react';
import styled, { useTheme } from 'styled-components';
import { visuallyHidden } from '../helpers/visually-hidden';
import { Container } from '../components/container';
import { Banner } from '../components/banner';
import { CategoryCard } from '../components/category-card';
import { ServiceCard } from '../components/service-card';
import { TypographyVariant, Typography } from '../elements/typography';

import { useMockBanner } from '../mocks/banner';
import { useMockCategories } from '../mocks/categories';
import { useMockServices } from '../mocks/services';

const StyledIndexPage = styled.div`
  padding-bottom: 70px;
`;

const StyledPageTitle = styled.h1`${visuallyHidden}`;

const StyledSection = styled(Container).attrs({
  as: 'section'
})`
  margin-top: 50px;
`;

const StyledSectionTitle = styled(Typography).attrs({
  as: 'h2',
  variant: TypographyVariant.TITLE_2
})`
  margin-bottom: 28px;
`;

const StyledCardList = styled.ul`
  display: grid;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
`;

function IndexPage() {
  const theme = useTheme();
  const banner = useMockBanner(theme.current);
  const categories = useMockCategories();
  const services = useMockServices();

  return (
    <StyledIndexPage>
      <StyledPageTitle>
        Оптика Зоркий
      </StyledPageTitle>
      <Banner {...banner} />
      <StyledSection>
        <StyledSectionTitle>
          Категории товаров
        </StyledSectionTitle>
        <StyledCardList>
          {categories.map((category) => (
            <li key={category.id}>
              <CategoryCard {...category} />
            </li>
          ))}
        </StyledCardList>
      </StyledSection>
      <StyledSection>
        <StyledSectionTitle>
          Услуги
        </StyledSectionTitle>
        <StyledCardList>
          {services.map((service) => (
            <li key={service.id}>
              <ServiceCard {...service} />
            </li>
          ))}
        </StyledCardList>
      </StyledSection>
    </StyledIndexPage>
  );
}

export { IndexPage };
