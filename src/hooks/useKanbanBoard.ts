import { RootState } from '@store';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LOCAL_STORAGE_KEYS } from '@/constants/storage';
import { setTasks } from '@/store/reducers/TasksSlice';

export const useKanbanBoard = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state: RootState) => state.tasks.columns);

  const loadTasksFromStorage = useCallback(() => {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEYS.TASKS);
    if (savedTasks) {
      dispatch(setTasks(JSON.parse(savedTasks)));
    }
  }, [dispatch]);

  useEffect(() => {
    loadTasksFromStorage();
  }, [loadTasksFromStorage]);

  return { columns };
};
