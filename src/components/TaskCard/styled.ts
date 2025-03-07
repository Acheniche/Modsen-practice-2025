import styled from 'styled-components';

export const StyledTaskCard = styled.div<{
  priority?: 'High' | 'Medium' | 'Low';
}>`
  background: ${({ theme }) => theme.colors.white};
  padding: 12px;
  border-radius: 24px;
  margin-bottom: 12px;
  border: 1px solid
    ${(props) =>
      props.priority === 'High'
        ? ({ theme }) => theme.colors.red
        : props.priority === 'Medium'
          ? ({ theme }) => theme.colors.purple
          : props.priority === 'Low'
            ? ({ theme }) => theme.colors.green
            : ({ theme }) => theme.colors.dark_grey};

  text-align: left;
  display: flex;
  flex-direction: column;
  transition: 0.3s ease;

  &:hover {
    box-shadow: 0 0 10px 5px
      ${(props) =>
        props.priority === 'High'
          ? ({ theme }) => theme.colors.back_red
          : props.priority === 'Medium'
            ? ({ theme }) => theme.colors.back_blue
            : props.priority === 'Low'
              ? ({ theme }) => theme.colors.back_green
              : ({ theme }) => theme.colors.dark_grey};
  }
`;

export const StyledPriorityLabel = styled.button<{
  priority?: 'High' | 'Medium' | 'Low';
}>`
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
  margin-bottom: 12px;
  color: ${(props) =>
    props.priority === 'High'
      ? ({ theme }) => theme.colors.red
      : props.priority === 'Medium'
        ? ({ theme }) => theme.colors.purple
        : ({ theme }) => theme.colors.green};
  background: ${(props) =>
    props.priority === 'High'
      ? ({ theme }) => theme.colors.back_red
      : props.priority === 'Medium'
        ? ({ theme }) => theme.colors.back_blue
        : ({ theme }) => theme.colors.back_green};

  &:hover {
    box-shadow: 0 0 10px 5px
      ${(props) =>
        props.priority === 'High'
          ? ({ theme }) => theme.colors.back_red
          : props.priority === 'Medium'
            ? ({ theme }) => theme.colors.back_blue
            : ({ theme }) => theme.colors.back_green};
  }
`;

export const StyledH3 = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  line-height: 22px;
  letter-spacing: -0.7%;
  color: ${({ theme }) => theme.colors.title};
`;

export const StyledP = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  line-height: 25.6px;
  letter-spacing: 0%;
  color: ${({ theme }) => theme.colors.description};
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

  &:hover {
    box-shadow: 0 0 10px 5px ${({ theme }) => theme.colors.back_red};
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const TitleInput = styled.input`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  line-height: 22px;
  letter-spacing: -0.7%;
  color: ${({ theme }) => theme.colors.title};
  border: ${({ theme }) => theme.border};
`;

export const DescriptionInput = styled.input`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  line-height: 25.6px;
  letter-spacing: 0%;
  color: ${({ theme }) => theme.colors.description};
  border: ${({ theme }) => theme.border};
`;

export const SaveButton = styled.button`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.demiBold};
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

export const Select = styled.select`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.demiBold};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  line-height: 16px;
  letter-spacing: -0.5%;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  border: ${({ theme }) => theme.border};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.back_blue};
  padding: ${({ theme }) => theme.padding.button};
  border-radius: 20px;
  appearance: none;
  cursor: ${({ theme }) => theme.cursor};
  width: fit-content;
  outline: none;
  margin-bottom: 12px;
`;

export const EditButton = styled.button`
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
  color: ${({ theme }) => theme.colors.yellow};
  background: ${({ theme }) => theme.colors.back_yellow};

  &:hover {
    box-shadow: 0 0 10px 5px ${({ theme }) => theme.colors.back_yellow};
  }
`;

export const MenuContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.grey};
  border-radius: 8px;
  gap: ${({ theme }) => theme.gap.M};
  display: flex;
  position: absolute;
  right: 30px;
`;

export const MenuButton = styled.button`
  background: transparent;
  border: ${({ theme }) => theme.border};
  cursor: ${({ theme }) => theme.cursor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  width: 24px;
  height: 24px;
  position: relative;
  margin-left: auto;
`;

export const DotsIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 16px;
  width: 4px;

  span {
    display: block;
    width: 4px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.dark_grey};
    border-radius: 50%;
    transition: background-color 0.2s;
  }

  ${MenuButton}:hover & span {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;
