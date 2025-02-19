import React from 'react';
import {
  StyledTaskCard,
  StyledPriorityLabel,
  StyledH3,
  StyledP,
  DeleteButton,
  StyledButtonWrapper,
} from './styled';
import { TaskCardProps } from '@/types/TaskCardProps';
import { useDispatch } from 'react-redux';
import { removeTask } from '@/store/reducers/TasksSlice';

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTask({ taskId: task.id, column: task.column }));
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('taskId', task.id.toString());
    event.dataTransfer.setData('taskColumn', task.column);
  };

  return (
    <StyledTaskCard draggable onDragStart={handleDragStart}>
      <StyledButtonWrapper>
        {task.priority && (
          <StyledPriorityLabel priority={task.priority}>
            {task.priority}
          </StyledPriorityLabel>
        )}
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
      </StyledButtonWrapper>
      <StyledH3>{task.title}</StyledH3>
      <StyledP>{task.description}</StyledP>
    </StyledTaskCard>
  );
};

export default TaskCard;
