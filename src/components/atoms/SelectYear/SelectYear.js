import React from 'react';
import { Wrapper } from './SelectYear.styles';
import { date } from 'data/date';

const SelectYear = (props) => (
  <Wrapper>
    <select {...props} defaultValue={date.year}>
      {date.yearList.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  </Wrapper>
);

export default SelectYear;
