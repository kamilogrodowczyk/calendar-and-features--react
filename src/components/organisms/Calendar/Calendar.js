import React from 'react';
import { StyledCalendar, StyledNameDay } from './Calendar.styles';
import CalendarItem from 'components/molecules/CalendarItem/CalendarItem';
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
      <CalendarItem />
    </StyledCalendar>
  </Wrapper>
);

export default Calendar;
