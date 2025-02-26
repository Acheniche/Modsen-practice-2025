import { TasksState } from '@/types/tasks';

export const INITIAL_TASKS_STATE: TasksState = {
  columns: {
    'To Do': {
      tasks: [],
      colors: {
        primary: 'var(--color-purple)',
        secondary: 'var(--color-back-blue)',
      },
    },
    'In Progress': {
      tasks: [],
      colors: {
        primary: 'var(--color-yellow)',
        secondary: 'var(--color-back-yellow)',
      },
    },
    Done: {
      tasks: [],
      colors: {
        primary: 'var(--color-green)',
        secondary: 'var(--color-back-green)',
      },
    },
  },
};

export const DEFAULT_COLUMN_CONFIG = {
  tasks: [],
  colors: {
    primary: 'var(--color-purple)',
    secondary: 'var(--color-back-blue)',
  },
};

export const NEW_COLUMN_BASE_NAME = 'New Column';
