import styled from 'styled-components';

export const Column = styled.div<{ color: string }>`
  background: var(--color-grey);
  padding: 12px;
  border-radius: 32px;
  width: 315px;
  box-shadow: 0 2px 10px var(--color-dark-grey);
  height: fit-content;
  flex: 0 0 auto;
`;
