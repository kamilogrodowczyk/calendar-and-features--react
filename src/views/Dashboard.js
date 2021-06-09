import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import Calendar from 'components/organisms/Calendar/Calendar';
import { date } from 'data/date';
import styled from 'styled-components';
import Leftbar from 'components/organisms/Leftbar/Leftbar';
import Rightbar from 'components/organisms/Rightbar/Rightbar';
import InputModal from 'components/organisms/Modal/InputModal';
import RemoveModal from 'components/organisms/Modal/RemoveModal';
import EditModal from 'components/organisms/Modal/EditModal';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const initialDate = {
  year: date.year,
  month: date.monthName[date.month],
  monthIndex: date.month + 1,
  remoldedMonthName: date.remoldedMonthName[date.month],
};

const initialInput = {
  title: '',
  time: '',
  description: '',
  comments: '',
  image: null,
};

const initialEvent = {
  company: '',
  eventDate: '',
  eventDateDigit: '',
  title: '',
  time: '',
  description: '',
  comments: '',
  image: '',
  creationDate: '',
  creationHour: '',
};

const Dashboard = () => {
  const [newDate, setNewDate] = useState(initialDate);
  const [isOpen, setOpenState] = useState(false);
  const [isOpenRemoveModal, setOpenStateRemoveModal] = useState(false);
  const [isOpenEditModal, setOpenStateEditModal] = useState(false);
  const [day, setDay] = useState('');
  const [company, setCompany] = useState('');
  const [changeInput, setInputChange] = useState({
    eventDate: `${day} ${date.remoldedMonthName[date.month]} ${date.year}`,
    ...initialInput,
  });
  const [event, showEvent] = useState([]);
  const [clickedEvent, showClickedEvent] = useState(initialEvent);
  const [opacityState, setOpacityState] = useState(false);
  const [buttonName, setButtonName] = useState('');
  const [arrayIndex, setArrayIndex] = useState(null);
  const [rightArrow, setRightArrowState] = useState(false);
  const [leftArrow, setLeftArrowState] = useState(false);
  const [styleEvent, setStyleEvent] = useState(null);
  const example = useRef(null);
  const theme = useTheme();

  const changeDate = (e) => {
    if (e.target.length === 12) {
      date.month = date.monthName.indexOf(e.target.value);
    } else if (e.target.length === 6) {
      date.year = parseInt(e.target.value);
    }
  };

  useEffect(() => {
    resetStyle(theme.colors.darkenYellow, theme.colors.black, 2);
  });

  const resetStyle = (bgColor, fontColor, childrenCondition = '') => {
    if (!example.current) return;
    const arr = [...example.current.children];
    arr.forEach((el) => {
      if (childrenCondition) {
        if (el.children.length > childrenCondition) {
          el.style.backgroundColor = bgColor;
          el.style.color = fontColor;
        }
      } else {
        el.style.backgroundColor = bgColor;
        el.style.color = fontColor;
      }
    });
  };

  const clickDate = () => {
    setNewDate({
      year: date.year,
      month: date.monthName[date.month],
      monthIndex: date.month + 1,
      remoldedMonthName: date.remoldedMonthName[date.month],
    });
    resetStyle('transparent', theme.colors.white);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setOpenState(false);
    if (!changeInput.title || e.target.nodeName !== 'BUTTON') return;
    if (buttonName === 'Dodaj') {
      showEvent([...event, changeInput]);
    } else if (buttonName === 'Zmień') {
      for (const property in changeInput) {
        clickedEvent[property] = changeInput[property];
        event[arrayIndex][property] = changeInput[property];
        setOpenStateEditModal(true);
      }
    }
    setInputChange({
      ...initialInput,
    });
    event.some((el) => {
      const isLess = el.eventDate < clickedEvent.eventDate;
      const isGreater = el.eventDate > clickedEvent.eventDate;
      if ((isGreater && changeInput.eventDate < clickedEvent.eventDate) || (isLess && changeInput.eventDate > clickedEvent.eventDate)) {
        setLeftArrowState(false);
        setRightArrowState(false);
      } else if (clickedEvent.eventDate < changeInput.eventDate && !isGreater) {
        setLeftArrowState(true);
        setRightArrowState(false);
      } else if (clickedEvent.eventDate > changeInput.eventDate && !isLess) {
        setLeftArrowState(false);
        setRightArrowState(true);
      }
    });
    styleEvent.style.backgroundColor = 'green';
    setStyleEvent(null);
  };

  const sortArray = (event) => {
    event.sort((a, b) => {
      const dateA = new Date(a.eventDateDigit);
      const dateB = new Date(b.eventDateDigit);
      return dateA - dateB;
    });
    return event;
  };

  const dropImage = (e) => {
    const files = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
      setInputChange({
        ...changeInput,
        image: reader.result,
      });
    };
    reader.readAsDataURL(files);
  };

  const handleInputChange = (e) => {
    const creationDay = date.date < 10 ? `0${date.date}` : `${date.date}`;
    const creationMonth = date.month + 1 < 10 ? `0${date.month + 1}` : `${date.month + 1}`;
    const creationHour = date.hour < 10 ? `0${date.hour}` : `${date.hour}`;
    const creationMinute = date.minutes < 10 ? `0${date.minutes}` : `${date.minutes}`;

    setInputChange({
      ...changeInput,
      eventDate: `${day} ${date.remoldedMonthName[date.month]} ${date.year}`,
      eventDateDigit: `${date.year} ${date.month + 1} ${day}`,
      [e.target.name]: e.target.value,
      creationDate: `${creationDay}.${creationMonth}.${date.year}`,
      creationHour: `${creationHour}:${creationMinute}`,
      company,
    });
  };

  const closeSidebar = () => {
    setOpacityState(false);
  };

  const showCompany = (e) => {
    setCompany(e.target.textContent);
    resetStyle('transparent', theme.colors.white);
  };

  const removeEventQuestion = () => {
    setOpenStateRemoveModal(true);
  };

  const removeEventAccept = () => {
    const ff = event.findIndex((el) => el.eventDate === clickedEvent.eventDate);
    event.splice(ff, 1);
    setOpacityState(false);
    setOpenStateRemoveModal(false);
    resetStyle('transparent', theme.colors.white);
  };

  const acceptRemovedEvent = () => {
    setOpenStateRemoveModal(false);
  };

  const acceptEditedEvent = () => {
    setOpenStateEditModal(false);
  };

  const editEvent = () => {
    setOpenState(true);
    const ff = event.findIndex((el) => el.eventDate === clickedEvent.eventDate);
    setArrayIndex(ff);
    setInputChange({
      ...changeInput,
      title: event[ff].title,
      time: event[ff].time,
      description: event[ff].description,
      comments: event[ff].comments,
    });
  };

  const slideEvent = (nextEvent) => {
    const sortedArray = sortArray(event);
    let arrayIndex = sortedArray.findIndex((el) => el.eventDate === clickedEvent.eventDate);
    arrayIndex = arrayIndex + nextEvent;
    if (!sortedArray[arrayIndex]);
    showClickedEvent(sortedArray[arrayIndex]);
    if (arrayIndex === 0) {
      setLeftArrowState(true);
    }

    if (sortedArray.length - 1 === arrayIndex) {
      setRightArrowState(true);
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

  const handleClick = (e) => {
    example.current = e.currentTarget.parentNode;
    setStyleEvent(e.target);
    const targetDay = e.currentTarget.firstChild.textContent;
    const twoDigitDate = parseInt(targetDay) < 10 ? `0${targetDay}` : `${targetDay}`;
    if (e.target.children.length <= 2) {
      setButtonName('Dodaj');
      setOpenState(true);
      setDay(twoDigitDate);
    } else {
      event.filter((element) => {
        if (element.eventDate === `${twoDigitDate} ${newDate.remoldedMonthName} ${newDate.year}`) {
          showClickedEvent({
            company: element.company,
            eventDate: `${twoDigitDate} ${date.remoldedMonthName[date.month]} ${date.year}`,
            eventDateDigit: element.eventDateDigit,
            title: element.title,
            time: element.time,
            description: element.description,
            comments: element.comments,
            image: element.image,
            creationDate: element.creationDate,
            creationHour: element.creationHour,
          });
        }
      });
      const sortedArray = sortArray(event);
      if (sortedArray[0].eventDate === `${twoDigitDate} ${newDate.remoldedMonthName} ${newDate.year}`) {
        setLeftArrowState(true);
      } else {
        setLeftArrowState(false);
      }

      if (sortedArray[sortedArray.length - 1].eventDate === `${twoDigitDate} ${newDate.remoldedMonthName} ${newDate.year}`) {
        setRightArrowState(true);
      } else {
        setRightArrowState(false);
      }
      setButtonName('Zmień');
      setOpacityState(true);
    }
  };

  return (
    <Wrapper>
      <InputModal
        isOpen={isOpen}
        handleClose={handleClose}
        day={day}
        newDate={newDate}
        handleInputChange={handleInputChange}
        changeInput={changeInput}
        dropImage={dropImage}
        buttonName={buttonName}
      />
      <Leftbar showCompany={showCompany} />
      <Calendar
        changeDate={changeDate}
        clickDate={clickDate}
        handleClick={handleClick}
        changeInput={changeInput}
        event={event}
        newDate={newDate}
        company={company}
      />
      <Rightbar
        clickedEvent={clickedEvent}
        opacityState={opacityState}
        closeSidebar={closeSidebar}
        editEvent={editEvent}
        removeEventQuestion={removeEventQuestion}
        removeEventAccept={removeEventAccept}
        event={event}
        showNextEvent={showNextEvent}
        showPreviousEvent={showPreviousEvent}
        leftArrow={leftArrow}
        rightArrow={rightArrow}
      />
      <RemoveModal isOpen={isOpenRemoveModal} acceptRemovedEvent={acceptRemovedEvent} removeEventAccept={removeEventAccept} />
      <EditModal isOpen={isOpenEditModal} acceptEditedEvent={acceptEditedEvent} />
    </Wrapper>
  );
};

export default Dashboard;
