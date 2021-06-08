import styled from 'styled-components';
import Modal from 'react-modal';
import { Button as ButtonDefault } from 'components/atoms/Button.styles';

export const Wrapper = styled(Modal)`
  width: 700px;
  height: 700px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  display: grid;
  gap: 3vh;
  justify-items: center;
  align-items: center;
  align-content: center;
  background-color: ${({ theme }) => theme.colors.black};
  letter-spacing: 1px;

  &:focus {
    outline: none;
  }
`;

export const Input = styled.input`
  width: 50%;
  height: 30px;
  border-radius: 20px;
  border: none;
  padding: 0 10px;
  color: ${({ isWhite, theme }) => (isWhite ? theme.colors.white : theme.colors.black)};

  &:focus {
    outline: none;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 7px 29px 0px;
  }
`;

export const Textarea = styled(Input)`
  height: 100px;
  padding: 10px 10px;
`;

export const Button = styled(ButtonDefault)`
  padding: 10px 20px;
`;
