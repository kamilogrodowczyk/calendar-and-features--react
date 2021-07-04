import { useState } from 'react';
import { sortArray } from 'helpers/sortArray';

export const useSelectedEvent = (initialEvent, event) => {
  const [clickedEvent, showClickedEvent] = useState(initialEvent);
  const [rightArrow, setRightArrowState] = useState(false);
  const [leftArrow, setLeftArrowState] = useState(false);

  const slideEvent = (nextEvent) => {
    const sortedArray = sortArray(event);
    let arrayIndex = sortedArray.findIndex((el) => el.eventDate === clickedEvent.eventDate);
    arrayIndex = arrayIndex + nextEvent;
    if (!sortedArray[arrayIndex]);
    showClickedEvent(sortedArray[arrayIndex]);
    changeArrowsAfterClick(arrayIndex, 0, sortedArray.length - 1, arrayIndex);
  };

  const addEvent = (twoDigitDate, newDate) => {
    event.filter((element) => {
      if (element.eventDate === `${twoDigitDate} ${newDate.remoldedMonthName} ${newDate.year}`) {
        showClickedEvent({
          company: element.company,
          eventDate: element.eventDate,
          formattedDateToSort: element.formattedDateToSort,
          title: element.title,
          time: element.time,
          description: element.description,
          comments: element.comments,
          image: element.image,
          creationDate: element.creationDate,
          creationHour: element.creationHour,
          day: element.day,
        });
      }
      return element;
    });
  };

  const changeArrowsAfterClose = (constantInfo) => {
    event.some((el) => {
      const isLess = el.formattedDateToSort < clickedEvent.formattedDateToSort;
      const isGreater = el.formattedDateToSort > clickedEvent.formattedDateToSort;
      if (
        (isGreater && constantInfo.formattedDateToSort < clickedEvent.formattedDateToSort) ||
        (isLess && constantInfo.formattedDateToSort > clickedEvent.formattedDateToSort)
      ) {
        setLeftArrowState(false);
        setRightArrowState(false);
      } else if (clickedEvent.formattedDateToSort < constantInfo.formattedDateToSort && !isGreater) {
        setLeftArrowState(true);
        setRightArrowState(false);
      } else if (clickedEvent.formattedDateToSort > constantInfo.formattedDateToSort && !isLess) {
        setLeftArrowState(false);
        setRightArrowState(true);
      }
      return el;
    });
  };

  const changeArrowsAfterClick = (initialArrayIndex, condition1, finalArrayIndex, condition2) => {
    if (initialArrayIndex === condition1) {
      setLeftArrowState(true);
    } else {
      setLeftArrowState(false);
    }

    if (finalArrayIndex === condition2) {
      setRightArrowState(true);
    } else {
      setRightArrowState(false);
    }
  };

  const showNextEvent = () => {
    slideEvent(1);
    setLeftArrowState(false);
  };

  const showPreviousEvent = () => {
    slideEvent(-1);
    setRightArrowState(false);
  };

  return {
    clickedEvent,
    rightArrow,
    leftArrow,
    addEvent,
    changeArrowsAfterClose,
    changeArrowsAfterClick,
    showNextEvent,
    showPreviousEvent,
  };
};
