import React from 'react';
import { LogOutButton } from 'components/atoms/LogOutButton.styles';
import { Wrapper, Paragraph } from './Leftbar.styles';
import { Heading2 } from 'components/atoms/Heading.styles';
import { clients } from 'data/clients';

const Leftbar = () => (
  <Wrapper>
    <Heading2>socialnet</Heading2>
    <div>
      {clients.map((client) => (
        <Paragraph key={client}>{client}</Paragraph>
      ))}
    </div>
    <LogOutButton>wyloguj się</LogOutButton>
  </Wrapper>
);

export default Leftbar;
