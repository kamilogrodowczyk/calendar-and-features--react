import React, { useContext } from 'react';
import { StyledCalendarNow } from './CalendarItem.styles';
import { date } from 'data/date';
import PastDays from 'components/atoms/PastDays';
import NextDays from 'components/atoms/NextDays';
import { WrapperContext } from 'providers/DateProvider';

const CalendarItem = ({ dayEvent }) => {
  const { handleAddEvent } = useContext(WrapperContext);

  return (
    <>
      <PastDays />
      {date.displayNumberOfDays(date.month).map((el, index) => (
        <StyledCalendarNow key={index + 1} el={index + 1} isToday={el} onClick={handleAddEvent}>
          <p>{el}</p>
          {dayEvent(el)}
        </StyledCalendarNow>
      ))}
      <NextDays />
    </>
  );
};

export default CalendarItem;
