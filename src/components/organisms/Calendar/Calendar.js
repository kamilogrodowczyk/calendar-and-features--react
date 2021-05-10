import React from 'react';
import { Wrapper, StyledCalendarItem, StyledNameDay, StyledCalendar } from './Calendar.styles';
import CalendarItem from 'components/molecules/CalendarItem/CalendarItem';
import { date } from 'data/date';
import CalendarHeading from 'components/molecules/CalendarHeading/CalendarHeading';

const Calendar = ({ changeDate, clickDate, handleClick }) => (
  <Wrapper>
    <CalendarHeading changeDate={changeDate} clickDate={clickDate} />
    <StyledCalendar>
      <StyledNameDay>
        {date.days.map((day) => (
          <p key={day}>{day}</p>
        ))}
      </StyledNameDay>
      <StyledCalendarItem>
        <CalendarItem handleClick={handleClick} />
      </StyledCalendarItem>
    </StyledCalendar>
  </Wrapper>
);

export default Calendar;
