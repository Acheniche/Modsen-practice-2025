import { theme } from '@/styles';
import { TasksState } from '@/types/tasks';

export const INITIAL_TASKS_STATE: TasksState = {
  columns: {
    'To Do': {
      tasks: [],
      colors: {
        primary: theme.colors.purple,
        secondary: theme.colors.back_blue,
      },
    },
    'In Progress': {
      tasks: [],
      colors: {
        primary: theme.colors.yellow,
        secondary: theme.colors.back_yellow,
      },
    },
    Done: {
      tasks: [],
      colors: {
        primary: theme.colors.green,
        secondary: theme.colors.back_green,
      },
    },
  },
};

export const DEFAULT_COLUMN_CONFIG = {
  tasks: [],
  colors: {
    primary: theme.colors.purple,
    secondary: theme.colors.back_blue,
  },
};

export const NEW_COLUMN_BASE_NAME = 'New Column';
