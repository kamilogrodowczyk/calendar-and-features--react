import styled from 'styled-components';
import { date } from 'data/date';

export const StyledCalendarNow = styled.div`
  border-bottom: solid 1px white;
  border-left: solid 1px white;
  height: 100px;
  width: 100%;
  padding: 10px 0 0 10px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 5%;
    top: 5%;
    width: 90%;
    height: 90%;
    opacity: 0;
    background-color: ${({ theme }) => theme.colors.lightenBlack}; 
    transition: opacity 0.5 ease-in-out;
  }

  &:hover::after {
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.5 ease-in-out;
  }

  & > p {
    color: ${({ isToday }) => (isToday === date.date ? 'red' : '')};
    position: relative;
    z-index: 10;
  }
`;

export const StyledCalendarPast = styled(StyledCalendarNow)`
  & > p {
    opacity: 0.3;
  }
`;

export const StyledCalendarNext = styled(StyledCalendarNow)`
  & > p {
    opacity: 0.3;
  }
`;
