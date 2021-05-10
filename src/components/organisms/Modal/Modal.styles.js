import styled from 'styled-components';
import Modal from 'react-modal';
import { Button as ButtonDefault } from 'components/atoms/Button.styles';

export const Wrapper = styled(Modal)`
  width: 500px;
  height: 500px;
  background-color: yellow;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  display: grid;
  justify-content: center;
  justify-items: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Button = styled(ButtonDefault)`
  justify-self: center;
`;
