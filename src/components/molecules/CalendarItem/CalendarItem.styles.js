import styled from 'styled-components';
import { date } from 'data/date';

export const StyledCalendarNow = styled.div`
  border-bottom: solid 1px white;
  border-left: solid 1px white;
  height: 100px;
  width: 100%;
  padding: 7px;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightenBlack};
  }

  &:hover > svg {
    opacity: 1;
  }
  & > p {
    color: ${({ isToday }) => (isToday === date.date && new Date().getMonth() === date.month && new Date().getFullYear() === date.year ? 'red' : '')};
    opacity: 1;
    font-weight: 800;
  }

  & > * {
    pointer-events: none;
  }
`;
