import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-rows: 5fr 1fr;
  background-color: ${({ theme }) => theme.colors.white};
  width: 25%;
  height: 90%;
  position: relative;
  opacity: ${({ isOpacity }) => (isOpacity ? 1 : 0)};
  user-select: none;
`;
