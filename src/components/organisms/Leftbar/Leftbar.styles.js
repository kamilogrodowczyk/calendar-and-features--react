import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.yellow};
  width: 20%;
  height: 90%;
`;
