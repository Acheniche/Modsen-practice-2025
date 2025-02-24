import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Task } from '@/types/Task';

type ColumnsState = {
  [key: string]: Task[];
};

type TasksState = {
  columns: ColumnsState;
};

export const initialState: TasksState = {
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
      if (Object.keys(action.payload).length > 0) {
        state.columns = { ...action.payload };
      } else {
        state.columns = { ...initialState.columns };
      }
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
        const entries = Object.entries(state.columns).map(([key, value]) =>
          key === action.payload.oldName
            ? [action.payload.newName, value]
            : [key, value],
        );

        state.columns = Object.fromEntries(entries);
        localStorage.setItem('tasks', JSON.stringify(state.columns));
      }
    },

    reorderTasks: (
      state,
      action: PayloadAction<{
        column: string;
        sourceIndex: number;
        destinationIndex: number;
      }>,
    ) => {
      const { column, sourceIndex, destinationIndex } = action.payload;
      const tasks = [...state.columns[column]];
      const [reorderedTask] = tasks.splice(sourceIndex, 1);
      tasks.splice(destinationIndex, 0, reorderedTask);
      state.columns[column] = tasks;
      localStorage.setItem('tasks', JSON.stringify(state.columns));
    },

    moveTask: (
      state,
      action: PayloadAction<{
        taskId: number;
        fromColumn: string;
        toColumn: string;
        toIndex?: number;
      }>,
    ) => {
      const { taskId, fromColumn, toColumn, toIndex } = action.payload;

      if (state.columns[fromColumn] && state.columns[toColumn]) {
        const taskIndex = state.columns[fromColumn].findIndex(
          (task) => task.id === taskId,
        );

        if (taskIndex !== -1) {
          const [movedTask] = state.columns[fromColumn].splice(taskIndex, 1);
          const updatedTask = { ...movedTask, column: toColumn };

          if (toIndex !== undefined) {
            state.columns[toColumn].splice(toIndex, 0, updatedTask);
          } else {
            state.columns[toColumn].push(updatedTask);
          }
          localStorage.setItem('tasks', JSON.stringify(state.columns));
        }
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

    removeColumn: (state, action: PayloadAction<string>) => {
      const columnName = action.payload;
      if (state.columns[columnName]) {
        delete state.columns[columnName];
        localStorage.setItem('tasks', JSON.stringify(state.columns));
      }
    },

    updateTask: (
      state,
      action: PayloadAction<{
        taskId: number;
        column: string;
        updatedTask: Partial<Omit<Task, 'id' | 'column'>>;
      }>,
    ) => {
      const { taskId, column, updatedTask } = action.payload;
      const taskIndex = state.columns[column].findIndex(
        (task) => task.id === taskId,
      );

      if (taskIndex !== -1) {
        state.columns[column][taskIndex] = {
          ...state.columns[column][taskIndex],
          ...updatedTask,
        };
        localStorage.setItem('tasks', JSON.stringify(state.columns));
      }
    },

    reorderColumns: (
      state,
      action: PayloadAction<{ from: string; to: string }>,
    ) => {
      const columnNames = Object.keys(state.columns);
      const fromIndex = columnNames.indexOf(action.payload.from);
      const toIndex = columnNames.indexOf(action.payload.to);

      if (fromIndex !== -1 && toIndex !== -1) {
        const newOrder = [...columnNames];
        const [movedColumn] = newOrder.splice(fromIndex, 1);
        newOrder.splice(toIndex, 0, movedColumn);

        const newColumns: ColumnsState = {};
        newOrder.forEach((name) => {
          newColumns[name] = state.columns[name];
        });

        state.columns = newColumns;
        localStorage.setItem('tasks', JSON.stringify(state.columns));
      }
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
  removeColumn,
  updateTask,
  reorderTasks,
  reorderColumns,
} = tasksSlice.actions;
export default tasksSlice;
