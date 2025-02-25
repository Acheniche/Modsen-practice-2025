import styled from 'styled-components';

export const StyledTaskCard = styled.div<{
  priority?: 'High' | 'Medium' | 'Low';
}>`
  background: var(--color-white);
  padding: 12px;
  border-radius: 24px;
  margin-bottom: 12px;
  border: 1px solid
    ${(props) =>
      props.priority === 'High'
        ? 'var(--color-red)'
        : props.priority === 'Medium'
          ? 'var(--color-purple)'
          : props.priority === 'Low'
            ? 'var(--color-green)'
            : 'var(--color-dark-grey)'};

  text-align: left;
  display: flex;
  flex-direction: column;
  transition: 0.3s ease;

  &:hover {
    box-shadow: 0 0 10px 5px
      ${(props) =>
        props.priority === 'High'
          ? 'var(--color-back-red)'
          : props.priority === 'Medium'
            ? 'var(--color-back-blue)'
            : props.priority === 'Low'
              ? 'var(--color-back-green)'
              : 'var(--color-dark-grey)'};
  }
`;

export const StyledPriorityLabel = styled.button<{
  priority?: 'High' | 'Medium' | 'Low';
}>`
  font-size: var(--min-font-size);
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
      ? 'var(--color-red)'
      : props.priority === 'Medium'
        ? 'var(--color-purple)'
        : 'var(--color-green)'};
  background: ${(props) =>
    props.priority === 'High'
      ? 'var(--color-back-red)'
      : props.priority === 'Medium'
        ? 'var(--color-back-blue)'
        : 'var(--color-back-green)'};

  &:hover {
    box-shadow: 0 0 10px 5px
      ${(props) =>
        props.priority === 'High'
          ? 'var(--color-back-red)'
          : props.priority === 'Medium'
            ? 'var(--color-back-blue)'
            : 'var(--color-back-green)'};
  }
`;

export const StyledH3 = styled.h3`
  font-family: var(--font-family-default);
  font-weight: 700;
  font-size: var(--max-font-size);
  line-height: 22px;
  letter-spacing: -0.7%;
  color: var(--color-title);
`;

export const StyledP = styled.p`
  font-family: var(--font-family-default);
  font-weight: 400;
  font-size: var(--max-font-size);
  line-height: 25.6px;
  letter-spacing: 0%;
  color: var(--color-description);
`;

export const DeleteButton = styled.button`
  font-size: var(--min-font-size);
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: box-shadow 0.3s;
  font-weight: bold;
  border: none;
  color: var(--color-red);
  background: var(--color-back-red);

  &:hover {
    box-shadow: 0 0 10px 5px var(--color-back-red);
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const TitleInput = styled.input`
  font-family: var(--font-family-default);
  font-weight: 700;
  font-size: var(--max-font-size);
  line-height: 22px;
  letter-spacing: -0.7%;
  color: var(--color-title);
  border: none;
`;

export const DescriptionInput = styled.input`
  font-family: var(--font-family-default);
  font-weight: 400;
  font-size: var(--max-font-size);
  line-height: 25.6px;
  letter-spacing: 0%;
  color: var(--color-description);
  border: none;
`;

export const SaveButton = styled.button`
  font-family: var(--font-family-default);
  font-weight: 500;
  font-size: var(--mid-font-size);
  line-height: 20px;
  letter-spacing: -0.6%;
  color: var(--color-description);
  border: none;
  cursor: pointer;
  background-color: var(--color-white);
  text-align: left;
  padding: 2px;
  width: 30px;
`;

export const Select = styled.select`
  font-family: var(--font-family-default);
  font-weight: 600;
  font-size: var(--min-font-size);
  line-height: 16px;
  letter-spacing: -0.5%;
  text-align: center;
  color: var(--color-black);
  border: none;
  text-align: center;
  background-color: var(--color-back-blue);
  padding: 4px 8px;
  border-radius: 20px;
  appearance: none;
  cursor: pointer;
  width: fit-content;
  outline: none;
  margin-bottom: 12px;
`;

export const EditButton = styled.button`
  font-size: var(--min-font-size);
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: box-shadow 0.3s;
  font-weight: bold;
  border: none;
  color: var(--color-yellow);
  background: var(--color-back-yellow);

  &:hover {
    box-shadow: 0 0 10px 5px var(--color-back-yellow);
  }
`;

export const MenuContainer = styled.div`
  background: var(--color-white);
  box-shadow: 0 0 10px var(--color-grey);
  border-radius: 8px;
  gap: 8px;
  display: flex;
  position: absolute;
  right: 30px;
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
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
    background-color: var(--color-dark-grey);
    border-radius: 50%;
    transition: background-color 0.2s;
  }

  ${MenuButton}:hover & span {
    background-color: var(--color-black);
  }
`;
