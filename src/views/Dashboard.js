import React, { useState } from 'react';
import Calendar from 'components/organisms/Calendar/Calendar';
import { date } from 'data/date';
import styled from 'styled-components';
import Leftbar from 'components/organisms/Leftbar/Leftbar';
import Rightbar from 'components/organisms/Rightbar/Rightbar';
import Modal from 'components/organisms/Modal/Modal';

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
};

const Dashboard = () => {
  const [newDate, setNewDate] = useState(initialDate);
  const [isOpen, setOpenState] = useState(false);

  const changeDate = (e) => {
    if (e.target.length === 12) {
      date.month = date.monthName.indexOf(e.target.value);
    } else if (e.target.length === 5) {
      date.year = parseInt(e.target.value);
    }
  };

  const clickDate = () => {
    setNewDate({
      month: newDate.month,
      year: newDate.year,
    });
  };

  const handleClick = (e) => {
    setOpenState(true);
  };

  const handleClose = (e) => {
    setOpenState(false);
  };

  return (
    <Wrapper>
      <Modal isOpen={isOpen} handleClose={handleClose} />
      <Leftbar />
      <Calendar changeDate={changeDate} clickDate={clickDate} handleClick={handleClick} />
      <Rightbar />
    </Wrapper>
  );
};

export default Dashboard;
