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
  color: ${({ theme }) => theme.colors.red};
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.title};
`;

export const Button = styled.button`
  padding: 12px 24px;
  font-weight: 600;
  border: ${({ theme }) => theme.border};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.title};
  color: ${({ theme }) => theme.colors.white};
  cursor: ${({ theme }) => theme.cursor};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 10px 5px ${({ theme }) => theme.colors.grey};
    transform: translateY(-2px);
  }
`;
