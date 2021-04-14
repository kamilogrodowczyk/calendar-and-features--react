import React from 'react';
import { StyledButton, StyledBottom } from './RightbarBottom.styles';

const RightbarBottom = () => (
  <StyledBottom>
    <div>
      <StyledButton>edytuj</StyledButton>
      <StyledButton>usuń</StyledButton>
    </div>
    <p>utworzono 11.11.2021</p>
  </StyledBottom>
);

export default RightbarBottom;
