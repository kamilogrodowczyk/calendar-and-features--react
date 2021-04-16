import React from 'react';
import { StyledText } from './RightbarMiddle.styles';
import { Heading3 } from 'components/atoms/Heading.styles';
import { Paragraph } from 'components/atoms/Paragraph.styles';

const RightbarMiddle = () => (
  <StyledText>
    <div>
      <Heading3>Skrót nazwy postu</Heading3>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum nisl eget tincidunt blandit. Donec molestie sapien justo, quis venenatis
        purus aliquet in. Sed tempus turpis dolor, eget pharetra ipsum varius quis. Sed tempus sem magna, quis consequat urna fermentum ac.
        Pellentesque semper odio dolor, nec sodales augue laoreet quis.
      </Paragraph>
    </div>
    <div>
      <Paragraph>Uwagi</Paragraph>
      <Paragraph>Publikuje Dawid godzina 16:00</Paragraph>
    </div>
  </StyledText>
);

export default RightbarMiddle;
