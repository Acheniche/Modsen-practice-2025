import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { addColumn } from '@/store/reducers/TasksSlice';

export const useHeader = () => {
  const dispatch = useDispatch();

  const handleAddColumn = useCallback(() => {
    dispatch(addColumn());
  }, [dispatch]);

  return { handleAddColumn };
};
