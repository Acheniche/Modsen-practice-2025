import styled from 'styled-components';

export const TaskBoard = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: ${({ theme }) => theme.gap.XL};
  padding: 32px;
  justify-content: left;
  overflow-x: hidden;

  & > div {
    display: flex;
    gap: ${({ theme }) => theme.gap.XL};
    overflow-x: auto;
    padding-bottom: 10px;
    margin: 0 auto;
  }

  @media ${({ theme }) => theme.media.phone} {
    padding: 0px;
    display: block;

    & > div {
      flex-direction: column;
    }
  }
`;
