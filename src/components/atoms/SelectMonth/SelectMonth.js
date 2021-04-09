import React from 'react';
import { Wrapper } from './SelectMonth.styles';
import { date } from 'data/date';

const defaultValue = date.monthName[date.month];

const SelectMonth = () => (
  <Wrapper>
    <select defaultValue={defaultValue}>
      {date.monthName.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </select>
  </Wrapper>
);

export default SelectMonth;
