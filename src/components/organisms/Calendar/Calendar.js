import React, { useContext, useEffect } from 'react';
import { Wrapper, StyledCalendarItem, StyledNameDay, StyledCalendar, StyledDayEvent } from './Calendar.styles';
import CalendarItem from 'components/molecules/CalendarItem/CalendarItem';
import { date } from 'data/date';
import CalendarHeading from 'components/molecules/CalendarHeading/CalendarHeading';
import { WrapperContext } from 'providers/DateProvider';
import { useTheme } from 'styled-components';
import { resetStyle } from 'helpers/resetStyle';

const Calendar = () => {
  const { dateState, event, company, eventElement } = useContext(WrapperContext);
  const [newDate, setNewDate] = dateState;
  const themeEventElement = useTheme();

  useEffect(() => {
    resetStyle(eventElement, themeEventElement.colors.darkenYellow, themeEventElement.colors.black, 2);
  });

  const clickDate = () => {
    setNewDate({
      year: date.year,
      month: date.monthName[date.month],
      monthIndex: date.month + 1,
      remoldedMonthName: date.remoldedMonthName[date.month],
    });
    resetStyle(eventElement, 'transparent', themeEventElement.colors.white);
  };

  const dayEvent = (el) => (
    <>
      {event.map((element, eventIndex) =>
        element.eventDate === `${el < 10 ? '0' + el : el} ${newDate.remoldedMonthName} ${newDate.year}` && element.company === company ? (
          <StyledDayEvent key={eventIndex}>
            <p>{element.title}</p>
            <p>{element.time}</p>
          </StyledDayEvent>
        ) : null
      )}
    </>
  );
  return (
    <Wrapper>
      <CalendarHeading clickDate={clickDate} company={company} />
      <StyledCalendar>
        <StyledNameDay>
          {date.days.map((day) => (
            <p key={day}>{day}</p>
          ))}
        </StyledNameDay>
        <StyledCalendarItem>
          <CalendarItem dayEvent={dayEvent} />
        </StyledCalendarItem>
      </StyledCalendar>
    </Wrapper>
  );
};

export default Calendar;
