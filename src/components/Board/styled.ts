import styled from 'styled-components';

export const TaskBoard = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 16px;
  padding: 32px;
  justify-content: left;
  overflow-x: hidden;

  & > div {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    padding-bottom: 10px;
    scrollbar-width: none;
  }
`;
