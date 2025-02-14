import React from 'react';
import { StyledTaskCard, StyledPriorityLabel } from './styled';
import { TaskCardProps } from '@/types/TaskCardProps';

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <StyledTaskCard>
      {task.priority && (
        <StyledPriorityLabel priority={task.priority}>
          {task.priority}
        </StyledPriorityLabel>
      )}
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </StyledTaskCard>
  );
};

export default TaskCard;
