import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addColumn } from '@/store/reducers/TasksSlice';

export const useHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const handleAddColumn = useCallback(() => {
    dispatch(addColumn());
  }, [dispatch]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return { handleAddColumn, toggleMenu, isMenuOpen };
};
