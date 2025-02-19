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
    addTask: (
      state,
      action: PayloadAction<{ column: string; task: Omit<Task, 'column'> }>,
    ) => {
      const taskWithColumn = {
        ...action.payload.task,
        column: action.payload.column,
      };
      state.columns[action.payload.column].push(taskWithColumn);
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

    moveTask: (
      state,
      action: PayloadAction<{
        taskId: number;
        fromColumn: string;
        toColumn: string;
      }>,
    ) => {
      const { taskId, fromColumn, toColumn } = action.payload;
      const taskIndex = state.columns[fromColumn].findIndex(
        (task) => task.id === taskId,
      );

      if (taskIndex !== -1) {
        const [movedTask] = state.columns[fromColumn].splice(taskIndex, 1);
        const updatedTask = { ...movedTask, column: toColumn };
        state.columns[toColumn].push(updatedTask);
        localStorage.setItem('tasks', JSON.stringify(state.columns));
      }
    },

    removeTask: (
      state,
      action: PayloadAction<{ taskId: number; column: string }>,
    ) => {
      const { taskId, column } = action.payload;
      state.columns[column] = state.columns[column].filter(
        (task) => task.id !== taskId,
      );
      localStorage.setItem('tasks', JSON.stringify(state.columns));
    },
  },
});

export const {
  addTask,
  setTasks,
  addColumn,
  renameColumn,
  moveTask,
  removeTask,
} = tasksSlice.actions;
export default tasksSlice;
