import React from 'react';
import HeadingItem from 'components/molecules/HeadingItem/HeadingItem';
import SelectItem from 'components/molecules/SelectItem/SelectItem';

const Heading = ({ changeDate, clickDate }) => (
  <>
    <HeadingItem />
    <SelectItem changeDate={changeDate} clickDate={clickDate} />
  </>
);

export default Heading;
