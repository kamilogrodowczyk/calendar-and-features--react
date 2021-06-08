import React from 'react';
import { StyledCalendarNow, StyledCalendarPast, StyledCalendarNext, Div } from './CalendarItem.styles';
import { date } from 'data/date';

const showDaysInMonth = (days, arr) => {
  days.forEach((el, i) => {
    el = i + 1;
    arr.push(el);
  });
};

const addPastDays = () => {
  const arr = [];
  const slicePastDays = date.displayDay(date.year, date.month) - 1;
  const numbersOfPastDays = date.displayNumberOfDays(date.month - 1);
  showDaysInMonth(numbersOfPastDays, arr);
  const lastDaysOfPastMonth = slicePastDays === 0 ? arr.slice(-7) : arr.slice(-slicePastDays);
  return lastDaysOfPastMonth;
};

const addNextDays = () => {
  const arr = [];
  const sliceNextDays = 8 - date.displayDay(date.year, date.month + 1);
  const numbersOfNextDays = date.displayNumberOfDays(date.month + 1);
  showDaysInMonth(numbersOfNextDays, arr);
  const lastDaysOfNextMonth = arr.slice(0, sliceNextDays);
  return lastDaysOfNextMonth;
};

const CalendarItem = ({ handleClick, event, newDate: { remoldedMonthName, year }, company }) => {
  return (
    <>
      {addPastDays().map((el) => (
        <StyledCalendarPast key={el} index={el}>
          <p>{el}</p>
        </StyledCalendarPast>
      ))}
      {date.displayNumberOfDays(date.month).map((el, index) => (
        <StyledCalendarNow key={index + 1} el={index + 1} isToday={el} onClick={handleClick}>
          <p>{el}</p>
          <svg onClick={handleClick} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm112 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0" />
          </svg>
          {event.map((element, eventIndex) =>
            element.eventDate === `${el < 10 ? '0' + el : el} ${remoldedMonthName} ${year}` && element.company === company ? (
              <Div key={eventIndex}>
                <p>{element.title}</p>
                <p>{element.time}</p>
              </Div>
            ) : null
          )}
        </StyledCalendarNow>
      ))}
      {addNextDays().map((el) => (
        <StyledCalendarNext key={el} index={el}>
          <p>{el}</p>
        </StyledCalendarNext>
      ))}
    </>
  );
};

export default CalendarItem;
