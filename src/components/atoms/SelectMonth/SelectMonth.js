import React from 'react';
import { Wrapper } from './SelectMonth.styles';
import { date } from 'data/date';

const SelectMonth = (props) => (
  <Wrapper>
    <select {...props} defaultValue={date.monthName[date.month]}>
      {date.monthName.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </select>
  </Wrapper>
);

export default SelectMonth;
