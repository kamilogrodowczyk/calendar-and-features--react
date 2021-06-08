import React from 'react';
import { StyledHeading, Publication, ArrowLeft, ArrowRight, ArrowCancel } from './RightbarUp.styles';

const RightbarUp = ({ clickedEvent: { eventDate }, closeSidebar, event, showNextEvent, showPreviousEvent, leftArrow, rightArrow }) => {
  return (
    <StyledHeading>
      <ArrowLeft isOpacity={leftArrow} onClick={showPreviousEvent}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490">
          <path d="M15.541 490V0l458.917 245.009L15.541 490z" />
        </svg>
      </ArrowLeft>
      <ArrowRight isOpacity={rightArrow} onClick={showNextEvent}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490">
          <path d="M15.541 490V0l458.917 245.009L15.541 490z" />
        </svg>
      </ArrowRight>
      <Publication>
        publikacja
        <span> {eventDate}</span>
      </Publication>
      <ArrowCancel onClick={closeSidebar}>
        <svg height="487.595" viewBox="0 0 365.696 365.696" width="487.595" xmlns="http://www.w3.org/2000/svg">
          <path d="M243.188 182.86L356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0" />
        </svg>
      </ArrowCancel>
    </StyledHeading>
  );
};

export default RightbarUp;
