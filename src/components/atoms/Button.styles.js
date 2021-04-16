import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow};
  font-weight: 700;
  border-radius: 1px;
  padding: 0 20px;
  border: none;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkenYellow};
  }
`;
