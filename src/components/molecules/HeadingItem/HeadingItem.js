import React from 'react';
import Title from 'components/atoms/Title/Title';
import { Wrapper } from './HeadingItem.styles';

const HeadingItem = ({ date }) => (
  <Wrapper>
    <Title date={date} />
  </Wrapper>
);

export default HeadingItem;
