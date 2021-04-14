import React from 'react';
import SelectMonth from 'components/atoms/SelectMonth/SelectMonth';
import SelectYear from 'components/atoms/SelectYear/SelectYear';
import { Wrapper } from './SelectItem.styles';
import { Button } from 'components/atoms/Button/Button.styles';

const SelectItem = ({ changeDate, clickDate }) => {
  return (
    <Wrapper>
      <SelectMonth onChange={changeDate} />
      <SelectYear onChange={changeDate} />
      <Button onClick={clickDate}>idź</Button>
    </Wrapper>
  );
};

export default SelectItem;
