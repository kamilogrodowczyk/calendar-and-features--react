import React, { useContext } from 'react';
import { WrapperContext } from 'providers/DateProvider';
import { StyledText, StyledImage } from './RightbarMiddle.styles';
import { Title } from 'components/atoms/Heading.styles';
import { Paragraph } from 'components/atoms/Paragraph.styles';
import emptyImage from 'assets/images/empty-image.png';

const RightbarMiddle = () => {
  const { clickedEvent } = useContext(WrapperContext);
  return (
    <StyledText>
      <div>
        <Title as="h3">{clickedEvent.title}</Title>
        <StyledImage src={clickedEvent.image ? clickedEvent.image : emptyImage} alt="good-element" />
        <Paragraph isSmaller isMargin>
          {clickedEvent.description}
        </Paragraph>
      </div>
      <div>
        <Paragraph isSmaller isBold>
          Uwagi
        </Paragraph>
        <Paragraph isSmaller isMargin>
          {clickedEvent.comments}
        </Paragraph>
        <Paragraph isSmaller>Publikuje Dawid godzina {clickedEvent.creationHour}</Paragraph>
      </div>
    </StyledText>
  );
};

export default RightbarMiddle;
