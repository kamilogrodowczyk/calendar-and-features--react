import React from 'react';
import { LogOutButton } from 'components/atoms/LogOutButton/LogOutButton.styles';
import { Wrapper } from './Leftbar.styles';

const Leftbar = () => (
  <Wrapper>
    <h2>socialnet</h2>
    <div>
      <p>Łukasz Piszczek</p>
      <p>Łukasz Piszczek</p>
      <p>Łukasz Piszczek</p>
      <p>Łukasz Piszczek</p>
      <p>Łukasz Piszczek</p>
    </div>
    <LogOutButton>wyloguj się</LogOutButton>
  </Wrapper>
);

export default Leftbar;
