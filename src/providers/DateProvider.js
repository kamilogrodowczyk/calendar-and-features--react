import React, { useRef, useState, useEffect } from 'react';
import InputModal from 'components/organisms/Modal/InputModal';
import RemoveModal from 'components/organisms/Modal/RemoveModal';
import { sortArray } from 'helpers/sortArray';
import { resetStyle } from 'helpers/resetStyle';
import { useSelectedEvent } from 'hooks/useSelectedEvent';
import { useCompany } from 'hooks/useCompany';
import { useInput } from 'hooks/useInput';
import { useConstantInfo } from 'hooks/useConstantInfo';
import { useTheme } from 'styled-components';
import { initialDate, initialInput, editedInput, initialConstant, initialEvent, initialOpenState } from 'data/initialStates';

export const WrapperContext = React.createContext();

const WrapperProvider = ({ children }) => {
  const [newDate, setNewDate] = useState(initialDate);
  const [isOpen, setOpenState] = useState(initialOpenState);
  const [day, setDay] = useState('');
  const [event, showEvent] = useState([]);
  const [arrayIndex, setArrayIndex] = useState(null);

  const eventElement = useRef(null);
  const themeEventElement = useTheme();

  const { company, showCompany } = useCompany(eventElement);
  const { inputState, handleChangeInput, handleClearValues, handleSetImage, handleEditInput } = useInput(initialInput);
  const { constantInfo, handleShowConstantInfo } = useConstantInfo(initialConstant);
  const {
    clickedEvent,
    rightArrow,
    leftArrow,
    addEvent,
    changeArrowsAfterClose,
    changeArrowsAfterClick,
    showNextEvent,
    showPreviousEvent,
  } = useSelectedEvent(initialEvent, event);

  useEffect(() => {
    resetStyle(eventElement, themeEventElement.colors.darkenYellow, themeEventElement.colors.black, 2);
  });

  const handleClose = (e) => {
    e.preventDefault();
    setOpenState({
      ...isOpen,
      inputModal: false,
    });
    if (!inputState.title || e.target.nodeName !== 'BUTTON') return;
    if (!isOpen.editInputModal) {
      let merged = { ...inputState, ...constantInfo };
      showEvent([...event, merged]);
    } else {
      for (const property in inputState) {
        clickedEvent[property] = inputState[property];
        event[arrayIndex][property] = inputState[property];
        event[arrayIndex].eventDate = clickedEvent.eventDate;
      }
      setOpenState({
        ...isOpen,
        inputModal: false,
        editInputModal: false,
        editModal: true,
      });
    }
    handleClearValues();
    changeArrowsAfterClose(constantInfo);
  };

  const handleInputChange = (e) => {
    handleChangeInput(e);
    handleShowConstantInfo(day, company);
  };

  const removeEventAccept = () => {
    const eventIndex = event.findIndex((el) => el.eventDate === clickedEvent.eventDate);
    event.splice(eventIndex, 1);
    setOpenState({
      ...isOpen,
      removeModal: false,
      rightbarContainer: false,
    });
    resetStyle(eventElement, 'transparent', themeEventElement.colors.white);
  };

  const handleClick = (e) => {
    eventElement.current = e.currentTarget.parentNode;
    const targetDay = e.currentTarget.firstChild.textContent;
    const twoDigitDate = parseInt(targetDay) < 10 ? `0${targetDay}` : `${targetDay}`;
    const sortedArray = sortArray(event);
    const currentDate = `${twoDigitDate} ${newDate.remoldedMonthName} ${newDate.year}`;
    if (e.target.children.length <= 2) {
      setOpenState({
        ...isOpen,
        inputModal: true,
        editingModal: false,
      });
      setDay(twoDigitDate);
    } else {
      addEvent(twoDigitDate, newDate);
      changeArrowsAfterClick(sortedArray[0].eventDate, currentDate, sortedArray[sortedArray.length - 1].eventDate, currentDate);
      setOpenState({
        ...isOpen,
        rightbarContainer: true,
      });
    }
  };

  const dropImage = (e) => {
    const files = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
      handleSetImage(reader.result);
    };
    reader.readAsDataURL(files);
  };

  const editEvent = () => {
    setOpenState({
      ...isOpen,
      inputModal: true,
      editInputModal: true,
    });
    const eventIndex = event.findIndex((el) => el.eventDate === clickedEvent.eventDate);
    setArrayIndex(eventIndex);
    handleEditInput(editedInput, event[eventIndex]);
    setDay(clickedEvent.day);
  };
  return (
    <WrapperContext.Provider
      value={{
        openState: [isOpen, setOpenState],
        dateState: [newDate, setNewDate],
        showCompany,
        event,
        company,
        eventElement,
        clickedEvent,
        editEvent,
        showNextEvent,
        showPreviousEvent,
        leftArrow,
        rightArrow,
        handleClick,
      }}
    >
      {children}
      <InputModal
        isOpen={isOpen}
        handleClose={handleClose}
        day={day}
        newDate={newDate}
        handleInputChange={handleInputChange}
        inputState={inputState}
        clickedEvent={clickedEvent}
        dropImage={dropImage}
      />
      <RemoveModal removeEventAccept={removeEventAccept} />
    </WrapperContext.Provider>
  );
};

export default WrapperProvider;
