import React from 'react';
import Calendar from 'views/Calendar';
import { Wrapper } from './App.styles';
import { date } from 'data/date';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <Calendar date={date} />
    </Wrapper>
  </ThemeProvider>
);

export default App;
