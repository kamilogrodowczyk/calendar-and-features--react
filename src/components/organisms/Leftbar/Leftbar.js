import React, { useContext } from 'react';
import { LogOutButton } from 'components/atoms/LogOutButton.styles';
import { Wrapper, Paragraph } from './Leftbar.styles';
import { Title } from 'components/atoms/Heading.styles';
import { clients } from 'data/clients';
import { WrapperContext } from 'providers/DateProvider';

const Leftbar = () => {
  const { showCompany } = useContext(WrapperContext);
  return (
    <Wrapper>
      <Title as="h2">socialnet</Title>
      <div>
        {clients.map((client) => (
          <Paragraph key={client} onClick={showCompany}>
            {client}
          </Paragraph>
        ))}
      </div>
      <LogOutButton>wyloguj się</LogOutButton>
    </Wrapper>
  );
};

export default Leftbar;
