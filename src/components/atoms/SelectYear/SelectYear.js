import React from 'react';
import { Wrapper } from './SelectYear.styles';
import { date } from 'data/date';

const SelectYear = (props) => {
  const arrayOfYears = [];
  const todayYear = new Date().getFullYear();
  const pastYears = todayYear - 2;
  const nextYears = todayYear + 3;

  for (let i = pastYears; i <= nextYears; i++) {
    arrayOfYears.push(i);
  }
  return (
    <Wrapper>
      <select {...props} defaultValue={date.year}>
        {arrayOfYears.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};

export default SelectYear;
