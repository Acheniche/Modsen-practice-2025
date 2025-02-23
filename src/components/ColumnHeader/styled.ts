import styled from 'styled-components';

export const StyledColumnHeader = styled.h2`
  font-family: Plus Jakarta Sans;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.7%;
  color: #fff;
`;

export const ColumnHeaderWrapper = styled.div<{ primary: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  border-radius: 24px;
  padding-top: 8px;
  padding-right: 12px;
  padding-bottom: 8px;
  padding-left: 8px;
  margin-bottom: 16px;
  background: ${(props) => props.primary || 'rgba(79, 70, 229, 1)'};
`;

export const TasksCounter = styled.div<{ primary: string }>`
  width: 33px;
  height: 32px;
  gap: 8px;
  border-radius: 32px;
  padding-top: 6px;
  padding-right: 12px;
  padding-bottom: 6px;
  padding-left: 12px;
  background-color: #ffffff;
  font-family: Plus Jakarta Sans;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.6%;
  text-align: center;
  color: ${(props) => props.primary || 'rgba(79, 70, 229, 1)'};
`;

export const Plus = styled.div`
  position: relative;
  width: 18.75px;
  height: 18.75px;
  margin-left: auto;
  cursor: pointer;
`;

export const Vertical = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 2.63px;
  height: 18.75px;
  border-radius: 5px;
  transform: translateX(-50%);
  background: #ffffff;
`;

export const Horizontal = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 18.75px;
  border-radius: 5px;
  height: 2.63px;
  transform: translateY(-50%);
  background: #ffffff;
`;

export const EditInput = styled.input<{ primary: string }>`
  font-family: Plus Jakarta Sans;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.7%;
  border: none;
  outline: none;
  color: #fff;
  width: 40%;
  background-color: ${(props) => props.primary || 'rgba(79, 70, 229, 1)'};
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
  margin-left: auto;

  &:hover {
    box-shadow: 0 0 10px 5px #fff1f2;
  }
`;
