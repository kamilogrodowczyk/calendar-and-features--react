import React from 'react';
import { StyledCalendar } from './Calendar.styles';
import CalendarItem from 'components/molecules/CalendarItem/CalendarItem';
import { date } from 'data/date';

const Calendar = () => (
  <StyledCalendar>
    {[...Array(date.displayNumberOfDays())].map((el, index) => (
      <CalendarItem key={index + 1} index={index + 1} />
    ))}
  </StyledCalendar>
);

export default Calendar;
