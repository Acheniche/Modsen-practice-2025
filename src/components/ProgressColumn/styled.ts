import styled from 'styled-components';

export const Column = styled.div<{ color: string }>`
  background: ${({ theme }) => theme.colors.grey};
  padding: 12px;
  border-radius: 32px;
  width: 315px;
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.dark_grey};
  height: fit-content;
  flex: 0 0 auto;

  @media ${({ theme }) => theme.media.phone} {
    padding: 16px;
    width: 100%;
  }
`;
