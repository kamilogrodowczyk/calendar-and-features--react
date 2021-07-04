import React, { useContext } from 'react';
import { StyledCalendarNow } from './CalendarItem.styles';
import { date } from 'data/date';
import PastDays from 'components/atoms/PastDays';
import NextDays from 'components/atoms/NextDays';
import SvgAddElement from 'components/atoms/SVG/SvgAddElement';
import { WrapperContext } from 'providers/DateProvider';

const CalendarItem = ({ dayEvent }) => {
  const { handleClick } = useContext(WrapperContext);
  return (
    <>
      <PastDays />
      {date.displayNumberOfDays(date.month).map((el, index) => (
        <StyledCalendarNow key={index + 1} el={index + 1} isToday={el} onClick={handleClick}>
          <p>{el}</p>
          <SvgAddElement onClick={handleClick} />
          {dayEvent(el)}
        </StyledCalendarNow>
      ))}
      <NextDays />
    </>
  );
};

export default CalendarItem;
