import { PRIORITY_OPTIONS } from '@/constants/priorities';
import { useTaskCard } from '@/hooks/useTaskCard';
import { TaskCardProps } from '@/types/TaskCardProps';

import {
  DeleteButton,
  DescriptionInput,
  DotsIcon,
  EditButton,
  MenuButton,
  MenuContainer,
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
  const {
    isEditing,
    title,
    description,
    priority,
    isMenuOpen,
    handleDelete,
    handleEdit,
    handleSave,
    handleDragStart,
    handlePriorityChange,
    handleTitleChange,
    handleDescriptionChange,
    toggleMenu,
  } = useTaskCard(task);

  return (
    <StyledTaskCard
      draggable
      onDragStart={handleDragStart}
      priority={task.priority}
    >
      {isEditing ? (
        <>
          <Select value={priority ?? ''} onChange={handlePriorityChange}>
            {PRIORITY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <TitleInput value={title} onChange={handleTitleChange} />
          <DescriptionInput
            placeholder="Add description"
            value={description}
            onChange={handleDescriptionChange}
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
            {isMenuOpen && (
              <MenuContainer>
                <EditButton onClick={handleEdit}>Edit</EditButton>
                <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
              </MenuContainer>
            )}
            <MenuButton onClick={toggleMenu}>
              <DotsIcon>
                <span></span>
                <span></span>
                <span></span>
              </DotsIcon>
            </MenuButton>
          </StyledButtonWrapper>
          <StyledH3>{task.title}</StyledH3>
          <StyledP>{task.description}</StyledP>
        </>
      )}
    </StyledTaskCard>
  );
};

export default TaskCard;
