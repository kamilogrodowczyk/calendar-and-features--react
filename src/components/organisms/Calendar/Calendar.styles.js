import styled from 'styled-components';
import { date } from 'data/date';

export const Wrapper = styled.div`
  display: grid;
  width: 700px;
`;

export const StyledNameDay = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;

  p {
    margin-bottom: 0.5rem;
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledCalendar = styled.div`
  border: solid 2px white;
  aspect-ratio: 7 / 5;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  justify-content: center;
  background-color: transparent;
  color: white;

  & > *:first-child {
    grid-column-start: ${date.displayDay()};
  }
`;
