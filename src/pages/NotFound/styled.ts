import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  gap: 20px;
`;

export const Title = styled.h1`
  color: var(--color-red);
`;

export const Message = styled.p`
  color: var(--color-title);
`;

export const Button = styled.button`
  padding: 12px 24px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  background-color: var(--color-title);
  color: var(--color-white);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 10px 5px var(--color-grey);
    transform: translateY(-2px);
  }
`;
