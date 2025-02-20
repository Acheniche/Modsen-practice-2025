import styled from 'styled-components';

export const Column = styled.div<{ color: string }>`
  background: #f8fafc;
  padding: 12px;
  border-radius: 32px;
  width: 315px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: fit-content;
  flex: 0 0 auto;
`;
