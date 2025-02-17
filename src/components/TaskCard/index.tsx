import React from 'react';
import {
  StyledTaskCard,
  StyledPriorityLabel,
  StyledH3,
  StyledP,
} from './styled';
import { TaskCardProps } from '@/types/TaskCardProps';

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <StyledTaskCard>
      {task.priority && (
        <StyledPriorityLabel priority={task.priority}>
          {task.priority}
        </StyledPriorityLabel>
      )}
      <StyledH3>{task.title}</StyledH3>
      <StyledP>{task.description}</StyledP>
    </StyledTaskCard>
  );
};

export default TaskCard;
