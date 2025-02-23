import React from 'react';
import { Column } from './styled';
import { ColumnProps } from '@/types/ColumnProps';
import AddTaskButton from '@components/AddTaskButton';
import TaskCard from '@components/TaskCard';
import ColumnHeader from '@components/ColumnHeader';
import { useDispatch } from 'react-redux';
import { moveTask, reorderTasks } from '@/store/reducers/TasksSlice';

const ProgressColumn: React.FC<ColumnProps> = ({
  title,
  tasks,
  color,
  buttonPrimaryColor,
  buttonSecondaryColor,
}) => {
  const dispatch = useDispatch();

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const taskId = parseInt(event.dataTransfer.getData('taskId'), 10);
    const sourceColumn = event.dataTransfer.getData('taskColumn');
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
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  return (
    <Column color={color} onDragOver={handleDragOver} onDrop={handleDrop}>
      <ColumnHeader
        buttonPrimaryColor={buttonPrimaryColor}
        tasks={tasks}
        title={title}
      />
      {tasks.map((task) => (
        <div
          key={task.id}
          data-task-id={task.id}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <TaskCard task={task} />
        </div>
      ))}
      <AddTaskButton
        buttonPrimaryColor={buttonPrimaryColor}
        buttonSecondaryColor={buttonSecondaryColor}
        column={title}
      >
        Add Task...
      </AddTaskButton>
    </Column>
  );
};

export default ProgressColumn;
