import React, { useRef, useState, useEffect } from 'react';
import InputModal from 'components/organisms/Modal/InputModal';
import RemoveModal from 'components/organisms/Modal/RemoveModal';
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
  const [filterr, setFilter] = useState([]);
  const [filterrIndex, setFilterIndex] = useState(1);
  const [isDispla, setDisplayStat] = useState(false);

  const eventElement = useRef(null);
  const themeEventElement = useTheme();

  const { company, showCompany } = useCompany(eventElement);
  const { inputState, handleChangeInput, handleClearValues, handleSetImage, handleEditInput } = useInput(initialInput);
  const { constantInfo, handleShowConstantInfo, clearConstant } = useConstantInfo(initialConstant);
  const { clickedEvent, rightArrow, leftArrow, addEvent, showNextEvent, showPreviousEvent, showEventWithTheSameDay } = useSelectedEvent(
    initialEvent,
    event
  );

  useEffect(() => {
    resetStyle(eventElement, themeEventElement.colors.darkenYellow, themeEventElement.colors.black, 2);
  }, [eventElement, themeEventElement]);

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
    clearConstant();
  };

  const handleInputChange = (e) => {
    handleChangeInput(e);
    handleShowConstantInfo(day, company);
  };

  const removeEventAccept = () => {
    const eventIndex = event.findIndex((el) => el.formattedDateToSort === clickedEvent.formattedDateToSort);
    event.splice(eventIndex, 1);
    setOpenState({
      ...isOpen,
      removeModal: false,
      rightbarContainer: false,
    });
    resetStyle(eventElement, 'transparent', themeEventElement.colors.white);
    setFilterIndex(1);
  };

  const handleShowEvent = (e) => {
    e.stopPropagation();
    const dayAttribute = e.currentTarget.getAttribute('data-day');
    const twoDigitDate = parseInt(dayAttribute) < 10 ? `0${dayAttribute}` : `${dayAttribute}`;
    if (filterrIndex === 1) {
      addEvent(twoDigitDate, newDate);
    } else {
      showEventWithTheSameDay(filterr, filterrIndex);
    }
    setOpenState({
      ...isOpen,
      rightbarContainer: true,
    });
  };

  const handleAddEvent = (e) => {
    eventElement.current = e.currentTarget.parentNode;
    const targetDay = e.currentTarget.firstChild.textContent;
    const twoDigitDate = parseInt(targetDay) < 10 ? `0${targetDay}` : `${targetDay}`;
    setDay(twoDigitDate);
    setOpenState({
      ...isOpen,
      inputModal: true,
      editingModal: false,
    });
    setFilterIndex(1);
    setFilter([]);
  };

  const dropImage = (e) => {
    handleSetImage(e.target.files[0]);
  };

  const updateImage = () => {
    const eventIndex = event.findIndex((el) => el.eventDate === clickedEvent.eventDate);
    event[eventIndex].image = inputState.image;
    clickedEvent.image = inputState.image;
    setDisplayStat(false);
    handleClearValues();
  };

  const changeImage = (e) => {
    handleSetImage(e.target.files[0]);
    setDisplayStat(true);
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
        filterState: [filterr, setFilter],
        filterIndexState: [filterrIndex, setFilterIndex],
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
        handleAddEvent,
        handleShowEvent,
        inputState,
        changeImage,
        isDispla,
        updateImage,
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
