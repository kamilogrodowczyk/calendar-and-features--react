import React from 'react';
import Heading from 'components/organisms/Heading/Heading';
import Calendar from 'components/organisms/Calendar/Calendar';
import { Wrapper } from './Calendar.styles';

const MainCalendar = () => (
  <Wrapper>
    <Heading />
    <Calendar />
  </Wrapper>
);

export default MainCalendar;
