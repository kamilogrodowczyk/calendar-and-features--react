import React from 'react';
import { Paragraph, Heading, Wrapper } from './CalendarHeading.styles';
import SelectMonth from 'components/atoms/SelectMonth/SelectMonth';
import SelectYear from 'components/atoms/SelectYear/SelectYear';
import { Button } from 'components/atoms/Button.styles';

const CalendarHeading = ({ changeDate, clickDate }) => (
  <>
    <Paragraph>
      Klienci/
      <span>Dąbex</span>
    </Paragraph>
    <Heading>Kalendarz</Heading>
    <Wrapper>
      <SelectMonth onChange={changeDate} />
      <SelectYear onChange={changeDate} />
      <Button onClick={clickDate}>idź</Button>
    </Wrapper>
  </>
);

export default CalendarHeading;
