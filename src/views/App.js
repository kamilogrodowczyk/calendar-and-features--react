import React from 'react';
import Calendar from 'views/Calendar';
import { Wrapper } from './App.styles';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Leftbar from 'components/organisms/Leftbar/Leftbar';
import Rightbar from 'components/organisms/Rightbar/Rightbar';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <Leftbar />
      <Calendar />
      <Rightbar />
    </Wrapper>
  </ThemeProvider>
);

export default App;
