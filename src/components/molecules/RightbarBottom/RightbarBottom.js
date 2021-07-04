import { Paragraph } from 'components/atoms/Paragraph.styles';
import React, { useContext } from 'react';
import { WrapperContext } from 'providers/DateProvider';
import { StyledButton, StyledBottom } from './RightbarBottom.styles';

const RightbarBottom = () => {
  const { openState, clickedEvent, editEvent } = useContext(WrapperContext);
  const [isOpen, setOpenState] = openState;

  const removeEventQuestion = () => {
    setOpenState({
      ...isOpen,
      removeModal: true,
    });
  };
  return (
    <StyledBottom>
      <div>
        <StyledButton onClick={editEvent}>edytuj</StyledButton>
        <StyledButton onClick={removeEventQuestion}>usuń</StyledButton>
      </div>
      <Paragraph isSmaller>utworzono {clickedEvent.creationDate}</Paragraph>
    </StyledBottom>
  );
};

export default RightbarBottom;
