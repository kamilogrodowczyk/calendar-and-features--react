import React from 'react';
import Calendar from 'views/Calendar';
import { Wrapper } from './App.styles';
import { date } from 'data/date';

const App = () => (
  <Wrapper>
    <Calendar date={date} />
  </Wrapper>
);

export default App;
