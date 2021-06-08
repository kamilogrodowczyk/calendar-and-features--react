import React from 'react';
import { Wrapper } from './Rightbar.styles';
import RightbarUp from 'components/molecules/RightbarUp/RightbarUp';
import RightbarMiddle from 'components/molecules/RightbarMiddle/RightbarMiddle';
import RightbarBottom from 'components/molecules/RightbarBottom/RightbarBottom';

const Rightbar = ({
  clickedEvent,
  opacityState,
  closeSidebar,
  editEvent,
  removeEventQuestion,
  event,
  showNextEvent,
  showPreviousEvent,
  leftArrow,
  rightArrow,
}) => (
  <Wrapper isOpacity={opacityState}>
    <RightbarUp
      clickedEvent={clickedEvent}
      closeSidebar={closeSidebar}
      event={event}
      showNextEvent={showNextEvent}
      showPreviousEvent={showPreviousEvent}
      leftArrow={leftArrow}
      rightArrow={rightArrow}
    />
    <RightbarMiddle clickedEvent={clickedEvent} />
    <RightbarBottom clickedEvent={clickedEvent} editEvent={editEvent} removeEventQuestion={removeEventQuestion} />
  </Wrapper>
);

export default Rightbar;
