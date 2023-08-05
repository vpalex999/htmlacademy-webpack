import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Theme } from './theme';

import { Fonts } from './tokens/fonts';
import { Colors } from './tokens/colors';
import { Gradients } from './tokens/gradients';
import { Shadows } from './tokens/shadows';
import { Resets } from './tokens/resets';
import { Icons } from './tokens/icons';

import { DefaultLayout } from './layouts/default';
import { IndexPage } from './pages/index';
import { CatalogPage } from './pages/catalog';

function App() {
  const [theme, setTheme] = useState(Theme.LIGHT);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={{ current: theme, toggleTheme }}>

      <Fonts />
      <Colors />
      <Gradients />
      <Shadows />
      <Resets />

      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<IndexPage />} />
          <Route path='catalog' element={<CatalogPage />} />
        </Route>
      </Routes>

      <Icons />

    </ThemeProvider>
  );
}

export { App };
