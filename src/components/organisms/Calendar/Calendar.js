import React from 'react';
import { Wrapper, StyledCalendarItem, StyledNameDay, StyledCalendar } from './Calendar.styles';
import CalendarItem from 'components/molecules/CalendarItem/CalendarItem';
import { date } from 'data/date';
import CalendarHeading from 'components/molecules/CalendarHeading/CalendarHeading';

const Calendar = ({ changeDate, clickDate, handleClick, changeInput, event, newDate, company }) => {
  return (
    <Wrapper>
      <CalendarHeading changeDate={changeDate} clickDate={clickDate} company={company} />
      <StyledCalendar>
        <StyledNameDay>
          {date.days.map((day) => (
            <p key={day}>{day}</p>
          ))}
        </StyledNameDay>
        <StyledCalendarItem>
          <CalendarItem handleClick={handleClick} changeInput={changeInput} event={event} newDate={newDate} company={company} />
        </StyledCalendarItem>
      </StyledCalendar>
    </Wrapper>
  );
};

export default Calendar;
