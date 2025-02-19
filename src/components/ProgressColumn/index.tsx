import React from 'react';
import { Column } from './styled';
import { ColumnProps } from '@/types/ColumnProps';
import AddTaskButton from '@components/AddTaskButton';
import TaskCard from '@components/TaskCard';
import ColumnHeader from '@components/ColumnHeader';
import { useDispatch } from 'react-redux';
import { moveTask } from '@/store/reducers/TasksSlice';

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

    if (sourceColumn !== title) {
      dispatch(moveTask({ taskId, fromColumn: sourceColumn, toColumn: title }));
    }
  };

  return (
    <Column
      color={color}
      onDragOver={(event) => event.preventDefault()}
      onDrop={handleDrop}
    >
      <ColumnHeader
        buttonPrimaryColor={buttonPrimaryColor}
        tasks={tasks}
        title={title}
      />
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
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
