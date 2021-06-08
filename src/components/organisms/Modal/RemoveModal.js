import React from 'react';
import { Wrapper, Button } from './RemoveModal.styles';
import { Paragraph } from 'components/atoms/Paragraph.styles';

const overlayStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
};

const RemoveModal = ({ isOpen, acceptRemovedEvent, removeEventAccept }) => {
  return (
    <Wrapper isOpen={isOpen} style={overlayStyles} appElement={document.getElementById('root')}>
      <Paragraph>Czy na pewno chcesz usunąć wydarzenie?</Paragraph>
      <span>
        <Button isMarginRight onClick={removeEventAccept}>
          Tak
        </Button>
        <Button onClick={acceptRemovedEvent}>Nie</Button>
      </span>
    </Wrapper>
  );
};

export default RemoveModal;
