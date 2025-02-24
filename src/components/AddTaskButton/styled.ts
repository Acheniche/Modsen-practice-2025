import styled from 'styled-components';

export const TaskButton = styled.button<{ primary: string; secondary: string }>`
  background: ${(props) => props.secondary || 'var(--color-back-blue)'};
  border: none;
  color: ${(props) => props.primary || 'var(--color-purple)'};
  font-size: var(--min-font-size);
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 10px 5px
      ${(props) => props.secondary || 'var(--color-back-blue)'};
  }
`;

export const Container = styled.div`
  background: white;
  border-radius: 24px;
  box-shadow: 0 2px 5px var(--color-dark-grey);
  border: 1px solid var(--color-dark-grey);
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
  background-color: #fff;
  text-align: left;
  padding: 2px;
  width: 30px;
`;
