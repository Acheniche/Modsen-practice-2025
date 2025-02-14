import React from 'react';
import { Column, ColumnHeader } from './styled';
import { ColumnProps } from '@/types/ColumnProps';
import AddTaskButton from '@components/AddTaskButton';
import TaskCard from '@components/TaskCard';

const ProgressColumn: React.FC<ColumnProps> = ({
  title,
  tasks,
  color,
  buttonPrimaryColor,
  buttonSecondaryColor,
}) => {
  return (
    <Column color={color}>
      <ColumnHeader>{title}</ColumnHeader>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
      <AddTaskButton
        buttonPrimaryColor={buttonPrimaryColor}
        buttonSecondaryColor={buttonSecondaryColor}
      >
        Add Task...
      </AddTaskButton>
    </Column>
  );
};

export default ProgressColumn;
