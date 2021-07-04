import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
`;

export const StyledCalendar = styled.div`
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

export const StyledCalendarItem = styled.div`
  border: solid 3px ${({ theme }) => theme.colors.white};
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};

  & > *:nth-child(7n - 1),
  & > *:nth-child(7n) {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const StyledDayEvent = styled.div`
  margin-top: 1.2vh;
  font-size: 12px;

  & > *:first-child {
    font-weight: 800;
  }
`;
