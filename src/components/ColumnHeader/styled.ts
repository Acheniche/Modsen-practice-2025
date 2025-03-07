import styled from 'styled-components';

export const StyledColumnHeader = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  line-height: 22px;
  letter-spacing: -0.7%;
  color: ${({ theme }) => theme.colors.white};
`;

export const ColumnHeaderWrapper = styled.div<{ primary: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.L};
  border-radius: 24px;
  padding: 8px 12px 8px 8px;
  margin-bottom: 16px;
  background: ${(props) =>
    props.primary || (({ theme }) => theme.colors.purple)};
`;

export const TasksCounter = styled.div<{ primary: string }>`
  width: 33px;
  height: 32px;
  gap: ${({ theme }) => theme.gap.M};
  border-radius: 32px;
  padding-top: 6px;
  padding-right: 12px;
  padding-bottom: 6px;
  padding-left: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.demiBold};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  line-height: 20px;
  letter-spacing: -0.6%;
  text-align: center;
  color: ${(props) => props.primary || (({ theme }) => theme.colors.purple)};
`;

export const Plus = styled.div`
  position: relative;
  width: 18.75px;
  height: 18.75px;
  margin-left: auto;
  cursor: ${({ theme }) => theme.cursor};
`;

export const Vertical = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 2.63px;
  height: 18.75px;
  border-radius: 5px;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.white};
`;

export const Horizontal = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 18.75px;
  border-radius: 5px;
  height: 2.63px;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.white};
`;

export const EditInput = styled.input<{ primary: string }>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  line-height: 22px;
  letter-spacing: -0.7%;
  border: ${({ theme }) => theme.border};
  outline: none;
  color: ${({ theme }) => theme.colors.white};
  width: 40%;
  background-color: ${(props) =>
    props.primary || (({ theme }) => theme.colors.purple)};
`;

export const DeleteButton = styled.button`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  cursor: ${({ theme }) => theme.cursor};
  padding: ${({ theme }) => theme.padding.button};
  border-radius: ${({ theme }) => theme.border_radius.button};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gap.S};
  transition: box-shadow 0.3s;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  border: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.colors.red};
  background: ${({ theme }) => theme.colors.back_red};
  margin-left: auto;

  &:hover {
    box-shadow: 0 0 10px 5px ${({ theme }) => theme.colors.back_red};
  }
`;
