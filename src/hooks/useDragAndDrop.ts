import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { DRAG_DATA_KEYS } from '@/constants/drag';
import { moveTask, reorderTasks } from '@/store/reducers/TasksSlice';
import { DragAndDropProps } from '@/types/DragAndDropProps';

export const useDragAndDrop = ({ title, tasks }: DragAndDropProps) => {
  const dispatch = useDispatch();

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const taskId = parseInt(
        event.dataTransfer.getData(DRAG_DATA_KEYS.TASK_ID),
        10,
      );
      const sourceColumn = event.dataTransfer.getData(
        DRAG_DATA_KEYS.TASK_COLUMN,
      );
      const targetTaskId = event.currentTarget.dataset.taskId;

      const targetIndex = targetTaskId
        ? tasks.findIndex((task) => task.id === parseInt(targetTaskId))
        : tasks.length;

      if (sourceColumn === title) {
        const sourceIndex = tasks.findIndex((task) => task.id === taskId);
        if (
          sourceIndex !== -1 &&
          targetIndex !== -1 &&
          sourceIndex !== targetIndex
        ) {
          dispatch(
            reorderTasks({
              column: title,
              sourceIndex,
              destinationIndex: targetIndex,
            }),
          );
        }
      } else if (sourceColumn !== title) {
        dispatch(
          moveTask({
            taskId,
            fromColumn: sourceColumn,
            toColumn: title,
            toIndex: targetIndex,
          }),
        );
      }
    },
    [dispatch, title, tasks],
  );

  const handleDragOver = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
    },
    [],
  );

  return { handleDrop, handleDragOver };
};
