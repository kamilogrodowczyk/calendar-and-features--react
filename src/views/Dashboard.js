import React from 'react';
import Calendar from 'components/organisms/Calendar/Calendar';
import styled from 'styled-components';
import Leftbar from 'components/organisms/Leftbar/Leftbar';
import Rightbar from 'components/organisms/Rightbar/Rightbar';
import EditModal from 'components/organisms/Modal/EditModal';
import WrapperProvider from 'providers/DateProvider';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <WrapperProvider>
        <Leftbar />
        <Calendar />
        <Rightbar />
        <EditModal />
      </WrapperProvider>
    </Wrapper>
  );
};

export default Dashboard;
