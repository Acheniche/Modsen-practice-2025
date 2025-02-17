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
  align-items: center;
  width: 289.6666564941406;
  height: 48;
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
  height: 100%;
  border-radius: 5px;
  transform: translateX(-50%);
  background: #ffffff;
`;

export const Horizontal = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
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
  display: inline-block;
  width: 70%;
  background-color: ${(props) => props.primary || 'rgba(79, 70, 229, 1)'};
`;
