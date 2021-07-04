import React, { useContext } from 'react';
import { Wrapper, Button } from './EditModal.styles';
import { Paragraph } from 'components/atoms/Paragraph.styles';
import { WrapperContext } from 'providers/DateProvider';

const overlayStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
};

const EditModal = () => {
  const { openState } = useContext(WrapperContext);
  const [isOpen, setOpenState] = openState;

  const acceptEditedEvent = () => {
    setOpenState({
      ...isOpen,
      editModal: false,
    });
  };
  return (
    <Wrapper isOpen={isOpen.editModal} style={overlayStyles} appElement={document.getElementById('root')}>
      <Paragraph>Wydarzenie zostało zmienione</Paragraph>
      <Button onClick={acceptEditedEvent}>Ok</Button>
    </Wrapper>
  );
};

export default EditModal;
