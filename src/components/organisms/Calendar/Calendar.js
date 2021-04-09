import React from 'react';
import { StyledCalendar, StyledNameDay } from './Calendar.styles';
import CalendarItem from 'components/atoms/CalendarItem/CalendarItem';
import { Wrapper } from './Calendar.styles';
import { date } from 'data/date';

const Calendar = () => (
  <Wrapper>
    <StyledNameDay>
      {date.days.map((day) => (
        <p key={day}>{day}</p>
      ))}
    </StyledNameDay>
    <StyledCalendar>
      {[...Array(date.displayNumberOfDays())].map((el, index) => (
        <CalendarItem key={index + 1} index={index + 1} />
      ))}
    </StyledCalendar>
  </Wrapper>
);

export default Calendar;
