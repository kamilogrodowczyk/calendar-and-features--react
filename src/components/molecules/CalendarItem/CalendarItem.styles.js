import styled from 'styled-components';
import { date } from 'data/date';
// import { addElement } from 'assets/images/plus.svg';

export const Div = styled.div`
  margin-top: 1.2vh;
  font-size: 12px;
  /* color: yellow; */

  & > *:first-child {
    font-weight: 800;
  }
`;

export const StyledCalendarNow = styled.div`
  border-bottom: solid 1px white;
  border-left: solid 1px white;
  height: 100px;
  width: 100%;
  padding: 7px;
  position: relative;
  cursor: pointer;
  /* background-color: transparent; */

  /* ${Div} & {
    margin-top: 1.2vh;
    font-size: 12px;
    background-color: yellow;

    & > *:first-child {
      font-weight: 800;
    }
  } */

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightenBlack};
  }

  & > svg {
    width: 27px;
    height: 27px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
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

export const StyledCalendarPast = styled(StyledCalendarNow)`
  &:hover {
    background-color: unset;
    cursor: unset;
  }

  & > p {
    opacity: 0.2;
  }
`;

export const StyledCalendarNext = styled(StyledCalendarNow)`
  &:hover {
    background-color: unset;
    cursor: unset;
  }

  & > p {
    opacity: 0.2;
  }
`;
