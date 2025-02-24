import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { removeTask, updateTask } from '@/store/reducers/TasksSlice';
import { PriorityType } from '@/types/Priority';
import { TaskCardProps } from '@/types/TaskCardProps';

import {
  DeleteButton,
  DescriptionInput,
  EditButton,
  SaveButton,
  Select,
  StyledButtonWrapper,
  StyledH3,
  StyledP,
  StyledPriorityLabel,
  StyledTaskCard,
  TitleInput,
} from './styled';

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState<PriorityType>(
    task.priority || undefined,
  );

  const handleDelete = () => {
    dispatch(removeTask({ taskId: task.id, column: task.column }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(
      updateTask({
        taskId: task.id,
        column: task.column,
        updatedTask: { title, description, priority },
      }),
    );
    setIsEditing(false);
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('taskId', task.id.toString());
    event.dataTransfer.setData('taskColumn', task.column);
  };

  return (
    <StyledTaskCard
      draggable
      onDragStart={handleDragStart}
      priority={task.priority}
    >
      {isEditing ? (
        <>
          <Select
            value={priority}
            onChange={(e) => setPriority(e.target.value as PriorityType)}
          >
            <option value="">Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Select>
          <TitleInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <DescriptionInput
            placeholder="Add description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </>
      ) : (
        <>
          <StyledButtonWrapper>
            {task.priority && (
              <StyledPriorityLabel priority={task.priority}>
                {task.priority}
              </StyledPriorityLabel>
            )}
            <EditButton onClick={handleEdit}>Edit</EditButton>
            <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
          </StyledButtonWrapper>
          <StyledH3>{task.title}</StyledH3>
          <StyledP>{task.description}</StyledP>
        </>
      )}
    </StyledTaskCard>
  );
};

export default TaskCard;
