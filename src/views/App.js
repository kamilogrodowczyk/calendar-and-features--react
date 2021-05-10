import React from 'react';
import Dashboard from 'views/Dashboard';
import { Wrapper } from './App.styles';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <Dashboard />
    </Wrapper>
  </ThemeProvider>
);

export default App;
