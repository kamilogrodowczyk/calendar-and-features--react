import React from 'react';
import styled from 'styled-components';
import { Paragraph as DefaultParagraph } from 'components/atoms/Paragraph.styles';
import { Heading1 } from 'components/atoms/Heading.styles';

const Paragraph = styled(DefaultParagraph)`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2rem;

  span {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

const Heading = styled(Heading1)`
  color: ${({ theme }) => theme.colors.yellow};
`;

const Title = () => (
  <>
    <Paragraph>
      Klienci/
      <span>Dąbex</span>
    </Paragraph>
    <Heading>Kalendarz</Heading>
  </>
);

export default Title;
