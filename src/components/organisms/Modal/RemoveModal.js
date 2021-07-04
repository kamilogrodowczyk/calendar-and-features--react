import React, { useContext } from 'react';
import { Wrapper, Button } from './RemoveModal.styles';
import { Paragraph } from 'components/atoms/Paragraph.styles';
import { WrapperContext } from 'providers/DateProvider';

const overlayStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
};

const RemoveModal = ({ removeEventAccept }) => {
  const { openState } = useContext(WrapperContext);
  const [isOpen, setOpenState] = openState;

  const acceptRemovedEvent = () => {
    setOpenState({
      ...isOpen,
      removeModal: false,
    });
  };
  return (
    <Wrapper isOpen={isOpen.removeModal} style={overlayStyles} appElement={document.getElementById('root')}>
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
