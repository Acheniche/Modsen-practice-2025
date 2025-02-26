import { Task } from '@/types/Task';

export type ColumnConfig = {
  tasks: Task[];
  colors: {
    primary: string;
    secondary: string;
  };
};

export type ColumnsState = {
  [key: string]: ColumnConfig;
};

export type TasksState = {
  columns: ColumnsState;
};
