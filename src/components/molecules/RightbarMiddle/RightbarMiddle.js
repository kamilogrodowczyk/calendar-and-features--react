import React, { useContext, useState } from 'react';
import { WrapperContext } from 'providers/DateProvider';
import { StyledText, StyledImage, Button, QuestionElement, FileInput, AcceptElement } from './RightbarMiddle.styles';
import { Button as DefaultButton } from 'components/atoms/Button.styles';
import { Title } from 'components/atoms/Heading.styles';
import { Paragraph } from 'components/atoms/Paragraph.styles';
import emptyImage from 'assets/images/empty-image.png';

const RightbarMiddle = () => {
  const { clickedEvent, updateImage, isDispla, changeImage } = useContext(WrapperContext);
  const [isDisplayQuestion, setDisplayState] = useState(false);

  return (
    <StyledText>
      <div style={{ position: 'relative' }}>
        <Title as="h3">{clickedEvent.title}</Title>
        <div>
          <StyledImage src={clickedEvent.image ? clickedEvent.image : emptyImage} alt="good-element" />
          <Button onClick={() => setDisplayState(true)}>Zmień</Button>
          <QuestionElement isDisplay={isDisplayQuestion}>
            <p>Czy na pewno chcesz zmienić zdjęcie?</p>
            <div>
              <FileInput
                onChange={changeImage}
                onClick={() => setDisplayState(false)}
                name="file"
                accept="image/png, image/jpeg"
                type="file"
              ></FileInput>
              <DefaultButton onClick={() => setDisplayState(false)}>Nie</DefaultButton>
            </div>
          </QuestionElement>
          <AcceptElement isDispla={isDispla}>
            <p>Zdjęcie zostało zapisane</p>
            <DefaultButton onClick={updateImage}>Ok</DefaultButton>
          </AcceptElement>
        </div>
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
