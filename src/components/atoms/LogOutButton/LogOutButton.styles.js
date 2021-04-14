import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button.styles';

export const LogOutButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 20px;
`;
