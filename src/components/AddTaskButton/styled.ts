import styled from 'styled-components';

export const TaskButton = styled.button<{ primary: string; secondary: string }>`
  background: ${(props) =>
    props.secondary || (({ theme }) => theme.colors.back_blue)};
  border: ${({ theme }) => theme.border};
  color: ${(props) => props.primary || (({ theme }) => theme.colors.purple)};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  cursor: ${({ theme }) => theme.cursor};
  padding: 4px 8px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 10px 5px
      ${(props) => props.secondary || (({ theme }) => theme.colors.back_blue)};
  }
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 5px ${({ theme }) => theme.colors.dark_grey};
  border: 1px solid ${({ theme }) => theme.colors.dark_grey};
  border-radius: 24px;
  padding: 12px;
`;

export const TaskForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Select = styled.select`
  font-famile: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  line-height: 16px;
  letter-spacing: -0.5%;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  border: ${({ theme }) => theme.border};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.back_blue};
  padding: 4px 8px;
  border-radius: 20px;
  appearance: none;
  cursor: ${({ theme }) => theme.cursor};
  width: fit-content;
  outline: none;
`;

export const TitleInput = styled.input`
  font-famile: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  line-height: 22px;
  letter-spacing: -0.7%;
  color: ${({ theme }) => theme.colors.title};
  border: ${({ theme }) => theme.border};
`;

export const DescriptionInput = styled.input`
  font-famile: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  line-height: 25.6px;
  letter-spacing: 0%;
  color: ${({ theme }) => theme.colors.description};
  border: ${({ theme }) => theme.border};
`;

export const SaveButton = styled.button`
  font-famile: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  line-height: 20px;
  letter-spacing: -0.6%;
  color: ${({ theme }) => theme.colors.description};
  border: ${({ theme }) => theme.border};
  cursor: ${({ theme }) => theme.cursor};
  background-color: ${({ theme }) => theme.colors.white};
  text-align: left;
  padding: 2px;
  width: 30px;
`;
