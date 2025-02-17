import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '@/types/Task';

type ColumnsState = {
  [key: string]: Task[];
};

type TasksState = {
  columns: ColumnsState;
};

const initialState: TasksState = {
  columns: {
    'To Do': [],
    'In Progress': [],
    Done: [],
  },
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ column: string; task: Task }>) => {
      state.columns[action.payload.column].push(action.payload.task);
      localStorage.setItem('tasks', JSON.stringify(state.columns));
    },
    setTasks: (state, action: PayloadAction<Record<string, Task[]>>) => {
      state.columns = action.payload;
    },
    addColumn: (state) => {
      let newColumnName = 'New Column';
      let counter = 1;

      while (state.columns[newColumnName]) {
        newColumnName = `New Column ${counter}`;
        counter++;
      }

      state.columns[newColumnName] = [];
      localStorage.setItem('tasks', JSON.stringify(state.columns));
    },
    renameColumn: (
      state,
      action: PayloadAction<{ oldName: string; newName: string }>,
    ) => {
      if (
        state.columns[action.payload.oldName] &&
        !state.columns[action.payload.newName]
      ) {
        state.columns[action.payload.newName] =
          state.columns[action.payload.oldName];
        delete state.columns[action.payload.oldName];
        localStorage.setItem('tasks', JSON.stringify(state.columns));
      }
    },
  },
});

export const { addTask, setTasks, addColumn, renameColumn } =
  tasksSlice.actions;
export default tasksSlice;
