import React from 'react';
import { Wrapper } from './SelectYear.styles';
import { date } from 'data/date';

const SelectYear = (props) => {
  return (
    <Wrapper>
      <select {...props} defaultValue={date.year}>
        {date.displayArrayOfYears().map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};

export default SelectYear;
