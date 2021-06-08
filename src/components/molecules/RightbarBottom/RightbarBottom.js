import { Paragraph } from 'components/atoms/Paragraph.styles';
import React from 'react';
import { StyledButton, StyledBottom } from './RightbarBottom.styles';

const RightbarBottom = ({ clickedEvent: { creationDate }, editEvent, removeEventQuestion }) => (
  <StyledBottom>
    <div>
      <StyledButton onClick={editEvent}>edytuj</StyledButton>
      <StyledButton onClick={removeEventQuestion}>usuń</StyledButton>
    </div>
    <Paragraph isSmaller>utworzono {creationDate}</Paragraph>
  </StyledBottom>
);

export default RightbarBottom;
