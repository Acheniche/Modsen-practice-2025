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
  border-radius: 24px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(226, 232, 240, 1);
  border-radius: 24px;
  border-width: 1px;
  padding: 12px;
`;

export const TaskForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Select = styled.select`
  font-family: 'Plus Jakarta Sans';
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.5%;
  text-align: center;
  color: #000000;
  border: none;
  text-align: center;
  background-color: #eef2ff;
  padding: 4px 8px;
  border-radius: 20px;
  appearance: none;
  cursor: pointer;
  width: fit-content;
  outline: none;
`;

export const TitleInput = styled.input`
  font-family: Plus Jakarta Sans;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.7%;
  color: #1e293b;
  border: none;
`;

export const DescriptionInput = styled.input`
  font-family: Plus Jakarta Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 25.6px;
  letter-spacing: 0%;
  color: #475569;
  border: none;
`;

export const SaveButton = styled.button`
  font-family: Plus Jakarta Sans;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.6%;
  color: #475569;
  border: none;
  cursor: pointer;
  background-color: #fff;
  text-align: left;
  padding: 2px;
  width: 30px;
`;
