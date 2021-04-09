import React from 'react';
import { Wrapper } from './SelectYear.styles';
import { date } from 'data/date';

const defaultValue = date.year;

const SelectMonth = () => (
  <Wrapper>
    <select defaultValue={defaultValue}>
      {date.yearList.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  </Wrapper>
);

export default SelectMonth;
