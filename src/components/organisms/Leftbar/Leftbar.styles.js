import styled from 'styled-components';
import { Paragraph as DefaultParagraph } from 'components/atoms/Paragraph.styles';

export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.yellow};
  width: 20%;
  height: 90%;

  & > div {
    align-self: flex-start;
    width: 65%;
  }
`;

export const Paragraph = styled(DefaultParagraph)`
  margin-bottom: 1rem;
  padding: 5px 5px;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    cursor: pointer;
  }
`;
