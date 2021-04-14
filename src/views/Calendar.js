import React, { useState } from 'react';
import Heading from 'components/organisms/Heading/Heading';
import Calendar from 'components/organisms/Calendar/Calendar';
import { Wrapper } from './Calendar.styles';
import { date } from 'data/date';

const initialDate = {
  year: date.year,
  month: date.monthName[date.month],
};

const MainCalendar = () => {
  const [newDate, setDate] = useState(initialDate);

  const changeDate = (e) => {
    if (e.target.length === 12) {
      date.month = date.monthName.indexOf(e.target.value);
    } else if (e.target.length === 5) {
      date.year = parseInt(e.target.value);
    }
  };

  const clickDate = () => {
    setDate({
      month: date.month,
      year: date.year,
    });
  };
  return (
    <Wrapper>
      <Heading changeDate={changeDate} clickDate={clickDate} />
      <Calendar />
    </Wrapper>
  );
};

export default MainCalendar;
