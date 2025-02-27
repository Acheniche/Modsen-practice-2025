import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useNotFound = () => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return { handleNavigate };
};
