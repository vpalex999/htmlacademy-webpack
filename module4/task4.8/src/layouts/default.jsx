import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

const StyledDefaultLayout = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.current === Theme.LIGHT ? Color.WHITE : Color.GRAY_50};
`;

function DefaultLayout() {
  return (
    <StyledDefaultLayout>
      <Header />
      <main><Outlet /></main>
      <Footer />
    </StyledDefaultLayout>
  );
}

export { DefaultLayout };
