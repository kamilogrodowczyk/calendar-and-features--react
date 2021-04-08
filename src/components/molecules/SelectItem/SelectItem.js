import React from 'react';
import SelectMonth from 'components/atoms/SelectMonth/SelectMonth';
import SelectYear from 'components/atoms/SelectYear/SelectYear';
import { Wrapper } from './SelectItem.styles';
import { Button } from 'components/atoms/Button/Button.styles';

const SelectItem = () => (
  <Wrapper>
    <SelectMonth />
    <SelectYear />
    <Button>Idź</Button>
  </Wrapper>
);

export default SelectItem;
