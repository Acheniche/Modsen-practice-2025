import styled from 'styled-components';

export const TaskButton = styled.button<{ primary: string; secondary: string }>`
  background: ${(props) =>
    props.secondary || (({ theme }) => theme.colors.back_blue)};
  border: ${({ theme }) => theme.border};
  color: ${(props) => props.primary || (({ theme }) => theme.colors.purple)};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  cursor: ${({ theme }) => theme.cursor};
  padding: ${({ theme }) => theme.padding.button};
  border-radius: ${({ theme }) => theme.border_radius.button};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gap.S};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.button}
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
  gap: ${({ theme }) => theme.gap.M};
`;

export const Select = styled.select`
  font-famile: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.demiBold};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  line-height: ${({ theme }) => theme.typography.lineHeight.small};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.normal};
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  border: ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.colors.back_blue};
  padding: ${({ theme }) => theme.padding.button};
  border-radius: 20px;
  appearance: none;
  cursor: ${({ theme }) => theme.cursor};
  width: fit-content;
  outline: none;
`;

export const TitleInput = styled.input`
  font-famile: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  line-height: ${({ theme }) => theme.typography.lineHeight.medium};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.large};
  color: ${({ theme }) => theme.colors.title};
  border: ${({ theme }) => theme.border};
`;

export const DescriptionInput = styled.input`
  font-famile: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  line-height: ${({ theme }) => theme.typography.lineHeight.large};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.small};
  color: ${({ theme }) => theme.colors.description};
  border: ${({ theme }) => theme.border};
`;

export const SaveButton = styled.button`
  font-famile: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.medium};
  color: ${({ theme }) => theme.colors.description};
  border: ${({ theme }) => theme.border};
  cursor: ${({ theme }) => theme.cursor};
  background-color: ${({ theme }) => theme.colors.white};
  text-align: left;
  padding: 2px;
  width: 30px;
`;
