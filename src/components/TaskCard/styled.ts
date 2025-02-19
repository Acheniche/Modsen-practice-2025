import styled from 'styled-components';

export const StyledTaskCard = styled.div`
  background: white;
  padding: 12px;
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
  margin-bottom: 12px;
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

export const StyledH3 = styled.h3`
font-family: Plus Jakarta Sans;
font-weight: 700;
font-size: 16px;
line-height: 22px;
letter-spacing: -0.7%;
color: background: #1E293B;
`;

export const StyledP = styled.p`
  font-family: Plus Jakarta Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 25.6px;
  letter-spacing: 0%;
  color: #475569;
`;

export const DeleteButton = styled.button`
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
  color: #f43f5e;
  background: #fff1f2;
  margin-bottom: 12px;

  &:hover {
    box-shadow: 0 0 10px 5px #fff1f2;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
