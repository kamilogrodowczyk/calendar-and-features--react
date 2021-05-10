import React from 'react';
import { StyledCalendarNow, StyledCalendarPast, StyledCalendarNext } from './CalendarItem.styles';
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

const CalendarItem = ({ handleClick }) => {
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
