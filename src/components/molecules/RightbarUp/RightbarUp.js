import React from 'react';
import { StyledHeading, Publication, ArrowLeft, ArrowRight, ArrowCancel } from './RightbarUp.styles';

const RightbarUp = () => (
  <StyledHeading>
    <ArrowLeft>&lt;</ArrowLeft>
    <ArrowRight>&gt;</ArrowRight>
    <Publication>publikacja 13 listopada 2021</Publication>
    <ArrowCancel>X</ArrowCancel>
  </StyledHeading>
);

export default RightbarUp;
