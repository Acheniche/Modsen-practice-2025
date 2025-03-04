import { TEXT } from '@constants/text';

import { Task } from '@/types/Task';
import { ColumnsState } from '@/types/tasks';

export const generateUniqueColumnName = (
  existingColumns: ColumnsState,
): string => {
  let newColumnName = TEXT.NEW_COLUMN_BASE_NAME;
  let counter = 1;

  while (existingColumns[newColumnName]) {
    newColumnName = `${TEXT.NEW_COLUMN_BASE_NAME} ${counter}`;
    counter++;
  }

  return newColumnName;
};

export const renameColumnInState = (
  columns: ColumnsState,
  oldName: string,
  newName: string,
): ColumnsState => {
  if (columns[oldName] && !columns[newName]) {
    const entries = Object.entries(columns).map(([key, value]) =>
      key === oldName ? [newName, value] : [key, value],
    );
    return Object.fromEntries(entries);
  }
  return columns;
};

export const reorderTasksInColumn = (
  tasks: Task[],
  sourceIndex: number,
  destinationIndex: number,
): Task[] => {
  const updatedTasks = [...tasks];
  const [reorderedTask] = updatedTasks.splice(sourceIndex, 1);
  updatedTasks.splice(destinationIndex, 0, reorderedTask);
  return updatedTasks;
};

export const moveTaskBetweenColumns = (
  columns: ColumnsState,
  taskId: number,
  fromColumn: string,
  toColumn: string,
  toIndex?: number,
): ColumnsState => {
  if (!columns[fromColumn] || !columns[toColumn]) return columns;

  const taskIndex = columns[fromColumn].tasks.findIndex(
    (task: Task) => task.id === taskId,
  );
  if (taskIndex === -1) return columns;

  const [movedTask] = columns[fromColumn].tasks.splice(taskIndex, 1);
  const updatedTask = { ...movedTask, column: toColumn };

  if (toIndex !== undefined) {
    columns[toColumn].tasks.splice(toIndex, 0, updatedTask);
  } else {
    columns[toColumn].tasks.push(updatedTask);
  }

  return columns;
};

export const reorderColumnsInState = (
  columns: ColumnsState,
  from: string,
  to: string,
): ColumnsState => {
  const columnNames = Object.keys(columns);
  const fromIndex = columnNames.indexOf(from);
  const toIndex = columnNames.indexOf(to);

  if (fromIndex === -1 || toIndex === -1) return columns;

  const newOrder = [...columnNames];
  const [movedColumn] = newOrder.splice(fromIndex, 1);
  newOrder.splice(toIndex, 0, movedColumn);

  const newColumns: ColumnsState = {};
  newOrder.forEach((name) => {
    newColumns[name] = columns[name];
  });

  return newColumns;
};
