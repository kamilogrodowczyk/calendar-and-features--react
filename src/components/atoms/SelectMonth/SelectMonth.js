import React from 'react';
import { Wrapper } from './SelectMonth.styles';
import { date } from 'data/date';

const defaultValue = date.monthName[date.month];

const SelectMonth = () => (
  <Wrapper defaultValue={defaultValue}>
    {date.monthName.map((month) => (
      <option key={month} value={month}>
        {month}
      </option>
    ))}
  </Wrapper>
);

export default SelectMonth;
