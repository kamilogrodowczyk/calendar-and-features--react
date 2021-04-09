import styled from 'styled-components';

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.white};

  span {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.yellow};
`;
