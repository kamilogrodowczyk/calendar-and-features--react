import React from 'react';
import { Wrapper } from './Rightbar.styles';
import RightbarUp from 'components/molecules/RightbarUp/RightbarUp';
import RightbarMiddle from 'components/molecules/RightbarMiddle/RightbarMiddle';
import RightbarBottom from 'components/molecules/RightbarBottom/RightbarBottom';

const Rightbar = () => (
  <Wrapper>
    <RightbarUp />
    <RightbarMiddle />
    <RightbarBottom />
  </Wrapper>
);

export default Rightbar;
