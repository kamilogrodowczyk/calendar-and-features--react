import React, { useContext, useEffect } from 'react';
import { Wrapper, StyledCalendarItem, StyledNameDay, StyledCalendar, StyledDayEvent, Span, Button, SpanFlex } from './Calendar.styles';
import CalendarItem from 'components/molecules/CalendarItem/CalendarItem';
import { date } from 'data/date';
import CalendarHeading from 'components/molecules/CalendarHeading/CalendarHeading';
import { WrapperContext } from 'providers/DateProvider';
import { useTheme } from 'styled-components';
import { resetStyle } from 'helpers/resetStyle';
import SvgAddElement from 'components/atoms/SVG/SvgAddElement';
import { sortArray } from 'helpers/sortArray';
import { findDuplicates } from 'helpers/findDuplicates';

const Calendar = () => {
  const { dateState, company, eventElement, event, handleShowEvent, filterIndexState, filterState } = useContext(WrapperContext);
  const [newDate, setNewDate] = dateState;
  const [filterr, setFilter] = filterState;
  const [filterrIndex, setFilterIndex] = filterIndexState;
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

  const nextEvent = (e) => {
    e.stopPropagation();
    const attr = e.target.getAttribute('data-date');
    const sortedArray = sortArray(event);
    setFilter(sortedArray.filter((el) => el.eventDate === attr));
    setFilterIndex(filterrIndex - 1);
  };

  const previousEvent = (e) => {
    e.stopPropagation();
    const attr = e.target.getAttribute('data-date');
    const sortedArray = sortArray(event);
    setFilter(sortedArray.filter((el) => el.eventDate === attr));
    setFilterIndex(filterrIndex + 1);
  };

  const dayEvent = (el) => {
    const eventDay = el < 10 ? '0' + el : el;
    const eventDate = `${eventDay} ${newDate.remoldedMonthName} ${newDate.year}`;
    const filtered = findDuplicates(event);
    const tt = filtered.some((el) => el === eventDate);
    const gg = filtered.find((el) => el === eventDate);
    return (
      <>
        {event.map((element, eventIndex) =>
          element.eventDate === eventDate && element.company === company ? (
            <React.Fragment key={eventIndex}>
              {filterr.length && gg && filterr[filterr.length - filterrIndex].eventDate === eventDate ? (
                <StyledDayEvent>
                  <p>{filterr[filterr.length - filterrIndex].title}</p>
                  <p>{filterr[filterr.length - filterrIndex].time}</p>
                </StyledDayEvent>
              ) : (
                <StyledDayEvent>
                  <p>{element.title}</p>
                  <p>{element.time}</p>
                </StyledDayEvent>
              )}
              <Span>
                {filterrIndex === 1 ? <Button>Dodaj</Button> : null}
                <Button data-day={el} onClick={handleShowEvent}>
                  Pokaż
                </Button>
                <SpanFlex isDisplay={tt} key={eventIndex}>
                  {filterr.length !== filterrIndex ? (
                    <Button onClick={previousEvent} data-date={eventDate} data-day={eventDay}>
                      &lt;
                    </Button>
                  ) : null}
                  {filterrIndex !== 1 ? (
                    <Button onClick={nextEvent} data-date={eventDate} data-day={eventDay}>
                      &gt;
                    </Button>
                  ) : null}
                </SpanFlex>
              </Span>
            </React.Fragment>
          ) : null
        )}
        <SvgAddElement />
      </>
    );
  };
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
