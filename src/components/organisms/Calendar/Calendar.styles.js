import styled from 'styled-components';
import { date } from 'data/date';

export const StyledCalendar = styled.div`
  border: solid 2px white;
  height: 500px;
  width: 700px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  background-color: #222;
  color: white;

  & > *:first-child {
    grid-column-start: ${date.displayDay()};
  }
`;
