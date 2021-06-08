import React from 'react';
import { StyledText, StyledImage } from './RightbarMiddle.styles';
import { Title } from 'components/atoms/Heading.styles';
import { Paragraph } from 'components/atoms/Paragraph.styles';
import emptyImage from 'assets/images/empty-image.png';

const RightbarMiddle = ({ clickedEvent: { title, description, comments, creationHour, image } }) => (
  <StyledText>
    <div>
      <Title as="h3">{title}</Title>
      <StyledImage src={image ? image : emptyImage} alt="good-element" />
      <Paragraph isSmaller isMargin>
        {description}
      </Paragraph>
    </div>
    <div>
      <Paragraph isSmaller isBold>
        Uwagi
      </Paragraph>
      <Paragraph isSmaller isMargin>
        {comments}
      </Paragraph>
      <Paragraph isSmaller>Publikuje Dawid godzina {creationHour}</Paragraph>
    </div>
  </StyledText>
);

export default RightbarMiddle;
