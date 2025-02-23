import React, { useState } from 'react';
import {
  StyledTaskCard,
  StyledPriorityLabel,
  StyledH3,
  StyledP,
  DeleteButton,
  EditButton,
  StyledButtonWrapper,
  TitleInput,
  DescriptionInput,
  SaveButton,
  Select,
} from './styled';
import { TaskCardProps } from '@/types/TaskCardProps';
import { useDispatch } from 'react-redux';
import { removeTask, updateTask } from '@/store/reducers/TasksSlice';
import { PriorityType } from '@/types/Priority';

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
    <StyledTaskCard draggable onDragStart={handleDragStart}>
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
