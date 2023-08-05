import React from 'react'
import styled, { useTheme } from 'styled-components'
import { Container } from '../components/container'
import { ProductCard } from '../components/product-card'
import { Button } from '../elements/button'
import { Typography, TypographyVariant } from '../elements/typography'

import { useMockProducts } from '../mocks/products'

const StyledCatalogPage = styled.div`
  padding-top: 40px;
  padding-bottom: 70px;
`

const StyledPageTitle = styled(Typography).attrs({
  as: 'h1',
  variant: TypographyVariant.TITLE_1,
})`
  margin-bottom: 40px;
`

const StyledProductList = styled.ol`
  display: grid;
  gap: 20px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
`

const StyledProductItem = styled.li`
  display: grid;
`

const StyledShowMoreButton = styled(Button)`
  display: block;
  margin-right: auto;
  margin-left: auto;
`

function CatalogPage() {
  const theme = useTheme()
  const products = useMockProducts(theme.current)

  return (
    <StyledCatalogPage>
      <Container>
        <StyledPageTitle>Каталог товаров</StyledPageTitle>
        <StyledProductList>
          {products.map(product => (
            <StyledProductItem key={product.id}>
              <ProductCard {...product} />
            </StyledProductItem>
          ))}
        </StyledProductList>
        <StyledShowMoreButton>Показать ещё</StyledShowMoreButton>
      </Container>
    </StyledCatalogPage>
  )
}

export { CatalogPage }
