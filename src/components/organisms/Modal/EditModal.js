import React from 'react';
import { Wrapper, Button } from './EditModal.styles';
import { Paragraph } from 'components/atoms/Paragraph.styles';

const overlayStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
};

const EditModal = ({ isOpen, acceptEditedEvent }) => {
  return (
    <Wrapper isOpen={isOpen} style={overlayStyles} appElement={document.getElementById('root')}>
      <Paragraph>Wydarzenie zostało zmienione</Paragraph>
      <Button onClick={acceptEditedEvent}>Ok</Button>
    </Wrapper>
  );
};

export default EditModal;
