import styled from 'styled-components';

export const TaskButton = styled.button<{ primary: string; secondary: string }>`
  background: ${(props) => props.secondary || 'rgba(238, 242, 255, 1)'};
  border: none;
  color: ${(props) => props.primary || 'rgba(79, 70, 229, 1)'};
  font-size: 12px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 10px 5px
      ${(props) => props.secondary || 'rgba(238, 242, 255, 1)'};
  }
`;

export const Container = styled.div`
  background: white;
  padding: 10px;
  border-radius: 24px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  border: 1px solid rgba(226, 232, 240, 1);
  width: 289.6666564941406;
  height: 106;
  gap: 16px;
  border-radius: 24px;
  border-width: 1px;
  padding: 12px;
`;
