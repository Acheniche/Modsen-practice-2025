import styled from 'styled-components';

export const Column = styled.div<{ color: string }>`
  background: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ColumnHeader = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;
