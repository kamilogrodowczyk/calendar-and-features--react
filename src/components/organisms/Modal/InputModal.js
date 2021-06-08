import React from 'react';
import { Wrapper, Textarea, Input, Button } from './InputModal.styles';
import { Title } from 'components/atoms/Heading.styles';

const InputModal = ({
  isOpen,
  handleClose,
  day,
  newDate: { remoldedMonthName, year },
  handleInputChange,
  dropImage,
  changeInput: { title, description, comments, time },
  buttonName,
}) => {
  return (
    <Wrapper isOpen={isOpen} onRequestClose={handleClose} appElement={document.getElementById('root')}>
      <Title as="h2" isWhite>
        Notatka
      </Title>
      <Title as="p" isWhite>
        {day} {remoldedMonthName} {year}
      </Title>
      <Input type="text" name="title" value={title} onChange={handleInputChange} placeholder="Tytuł" />
      <Input type="time" name="time" value={time} onChange={handleInputChange} />
      <Input type="file" name="file" accept="image/png, image/jpeg" onChange={dropImage} isWhite />
      <Textarea as="textarea" type="text" name="description" value={description} onChange={handleInputChange} placeholder="Opis" />
      <Textarea as="textarea" type="text" name="comments" value={comments} onChange={handleInputChange} placeholder="Uwagi" />
      <Button onClick={handleClose} type="submit">
        {buttonName}
      </Button>
    </Wrapper>
  );
};

export default InputModal;
