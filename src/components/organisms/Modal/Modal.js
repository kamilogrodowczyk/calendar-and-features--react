import React from 'react';
import { Paragraph } from 'components/atoms/Paragraph.styles';
import { Wrapper } from './Modal.styles';
import { Button } from './Modal.styles';

const Modal = ({ isOpen, handleClose }) => (
  <Wrapper isOpen={isOpen} onRequestClose={handleClose} appElement={document.getElementById('root')}>
    <Paragraph isWhite>Tytuł: </Paragraph>
    <Paragraph isWhite>Opis: </Paragraph>
    <Paragraph isWhite>Uwagi: </Paragraph>
    <Button onClick={handleClose}>Close</Button>
  </Wrapper>
);

export default Modal;
