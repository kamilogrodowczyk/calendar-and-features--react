import styled from 'styled-components';
import { Paragraph as DefaultParagraph } from 'components/atoms/Paragraph.styles';
import { Heading1 } from 'components/atoms/Heading.styles';

export const Paragraph = styled(DefaultParagraph)`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2rem;

  span {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const Heading = styled(Heading1)`
  color: ${({ theme }) => theme.colors.yellow};
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;

  & > * {
    margin-right: 0.5rem;
  }
`;
