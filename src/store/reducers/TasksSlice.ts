import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '@/types/Task';

interface TasksState {
  columns: Record<string, Task[]>;
}

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
  },
});

export const { addTask, setTasks } = tasksSlice.actions;
export default tasksSlice;
