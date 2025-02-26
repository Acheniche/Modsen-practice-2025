import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DEFAULT_COLUMN_CONFIG, INITIAL_TASKS_STATE } from '@/constants/tasks';
import { Task } from '@/types/Task';
import { ColumnConfig } from '@/types/tasks';
import { saveTasksToStorage } from '@/utils/storage';
import {
  generateUniqueColumnName,
  moveTaskBetweenColumns,
  renameColumnInState,
  reorderColumnsInState,
  reorderTasksInColumn,
} from '@/utils/tasks';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: INITIAL_TASKS_STATE,
  reducers: {
    addTask: (
      state,
      action: PayloadAction<{ column: string; task: Omit<Task, 'column'> }>,
    ) => {
      const taskWithColumn = {
        ...action.payload.task,
        column: action.payload.column,
      };
      state.columns[action.payload.column].tasks.push(taskWithColumn);
      saveTasksToStorage(state.columns);
    },

    setTasks: (state, action: PayloadAction<Record<string, ColumnConfig>>) => {
      state.columns =
        Object.keys(action.payload).length > 0
          ? { ...action.payload }
          : { ...INITIAL_TASKS_STATE.columns };
    },

    addColumn: (state) => {
      const newColumnName = generateUniqueColumnName(state.columns);
      state.columns[newColumnName] = { ...DEFAULT_COLUMN_CONFIG };
      saveTasksToStorage(state.columns);
    },

    renameColumn: (
      state,
      action: PayloadAction<{ oldName: string; newName: string }>,
    ) => {
      state.columns = renameColumnInState(
        state.columns,
        action.payload.oldName,
        action.payload.newName,
      );
      saveTasksToStorage(state.columns);
    },

    updateColumnColors: (
      state,
      action: PayloadAction<{
        column: string;
        colors: { primary: string; secondary: string };
      }>,
    ) => {
      const { column, colors } = action.payload;
      if (state.columns[column]) {
        state.columns[column].colors = colors;
        saveTasksToStorage(state.columns);
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
      state.columns[column].tasks = reorderTasksInColumn(
        state.columns[column].tasks,
        sourceIndex,
        destinationIndex,
      );
      saveTasksToStorage(state.columns);
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
      state.columns = moveTaskBetweenColumns(
        state.columns,
        taskId,
        fromColumn,
        toColumn,
        toIndex,
      );
      saveTasksToStorage(state.columns);
    },

    removeTask: (
      state,
      action: PayloadAction<{ taskId: number; column: string }>,
    ) => {
      const { taskId, column } = action.payload;
      state.columns[column].tasks = state.columns[column].tasks.filter(
        (task: Task) => task.id !== taskId,
      );
      saveTasksToStorage(state.columns);
    },

    removeColumn: (state, action: PayloadAction<string>) => {
      const columnName = action.payload;
      if (state.columns[columnName]) {
        delete state.columns[columnName];
        saveTasksToStorage(state.columns);
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
      const taskIndex = state.columns[column].tasks.findIndex(
        (task: Task) => task.id === taskId,
      );
      if (taskIndex !== -1) {
        state.columns[column].tasks[taskIndex] = {
          ...state.columns[column].tasks[taskIndex],
          ...updatedTask,
        };
        saveTasksToStorage(state.columns);
      }
    },

    reorderColumns: (
      state,
      action: PayloadAction<{ from: string; to: string }>,
    ) => {
      state.columns = reorderColumnsInState(
        state.columns,
        action.payload.from,
        action.payload.to,
      );
      saveTasksToStorage(state.columns);
    },
  },
});

export const {
  addTask,
  setTasks,
  addColumn,
  renameColumn,
  reorderTasks,
  moveTask,
  removeTask,
  removeColumn,
  updateTask,
  reorderColumns,
  updateColumnColors,
} = tasksSlice.actions;

export default tasksSlice;
