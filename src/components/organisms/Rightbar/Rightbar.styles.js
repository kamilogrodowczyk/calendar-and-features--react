import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  width: 25%;
  height: 90%;
`;
