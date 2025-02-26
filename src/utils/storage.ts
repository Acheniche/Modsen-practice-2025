import { LOCAL_STORAGE_KEYS } from '@/constants/storage';
import { ColumnConfig } from '@/types/tasks';

export const saveTasksToStorage = (columns: Record<string, ColumnConfig>) => {
  localStorage.setItem(LOCAL_STORAGE_KEYS.TASKS, JSON.stringify(columns));
};
