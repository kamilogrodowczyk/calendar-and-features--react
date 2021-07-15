import styled from 'styled-components';
import { Button as DefaultButton } from 'components/atoms/Button.styles';

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

  &:not(:last-of-type) {
    display: none;
    visibility: hidden;
  }

  & > *:first-child {
    font-weight: 800;
  }
`;

export const Span = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;

  & + svg {
    display: none;
  }
`;

export const SpanFlex = styled.span`
  display: ${({ isDisplay }) => (isDisplay ? 'flex' : 'none')};
  width: 100%;
  height: 100%;
`;

export const Button = styled(DefaultButton)`
  width: 100%;
  height: 100%;
  color: white;
  border-top: 1px solid white;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 400;
  background-color: rgba(70, 70, 70, 1);

  &:last-child {
    border-bottom: 1px solid white;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 1);
  }
`;
