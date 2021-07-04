import React from 'react';
import { date } from 'data/date';
import { Paragraph, Heading, Wrapper } from './CalendarHeading.styles';
import SelectMonth from 'components/atoms/SelectMonth/SelectMonth';
import SelectYear from 'components/atoms/SelectYear/SelectYear';
import { Button } from 'components/atoms/Button.styles';

const CalendarHeading = ({ company, clickDate }) => {
  const changeDate = (e) => {
    const yearArray = date.displayArrayOfYears();
    if (e.target.length === date.monthName.length) {
      date.month = date.monthName.indexOf(e.target.value);
    } else if (e.target.length === yearArray.length) {
      date.year = parseInt(e.target.value);
    }
  };

  return (
    <>
      <Paragraph>
        Klienci/
        <span>{company}</span>
      </Paragraph>
      <Heading>Kalendarz</Heading>
      <Wrapper>
        <SelectMonth onChange={changeDate} />
        <SelectYear onChange={changeDate} />
        <Button onClick={clickDate}>idź</Button>
      </Wrapper>
    </>
  );
};

export default CalendarHeading;
