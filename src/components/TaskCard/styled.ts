import styled from 'styled-components';

export const StyledTaskCard = styled.div`
  background: white;
  padding: 10px;
  border-radius: 24px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  border: 1px solid rgba(226, 232, 240, 1);
  text-align: left;
`;

export const StyledPriorityLabel = styled.button<{
  priority?: 'High' | 'Medium' | 'Low';
}>`
  font-size: 12px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: box-shadow 0.3s;
  font-weight: bold;
  border: none;
  color: ${(props) =>
    props.priority === 'High'
      ? '#F43F5E'
      : props.priority === 'Medium'
        ? '#4F46E5'
        : '#22C55E'};
  background: ${(props) =>
    props.priority === 'High'
      ? '#FFF1F2'
      : props.priority === 'Medium'
        ? '#EEF2FF'
        : '#F0FDF4'};

  &:hover {
    box-shadow: 0 0 10px 5px
      ${(props) =>
        props.priority === 'High'
          ? '#FFF1F2'
          : props.priority === 'Medium'
            ? '#EEF2FF'
            : '#F0FDF4'};
  }
`;
