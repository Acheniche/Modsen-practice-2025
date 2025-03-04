import { TEXT } from '@constants/text';

import { PRIORITY_OPTIONS } from '@/constants/priorities';
import { useAddTask } from '@/hooks/useAddTask';
import { AddTaskButtonProps } from '@/types/AddTaskButtonProps';

import {
  Container,
  DescriptionInput,
  SaveButton,
  Select,
  TaskButton,
  TaskForm,
  TitleInput,
} from './styled';

const AddTaskButton: React.FC<AddTaskButtonProps> = ({
  buttonPrimaryColor,
  buttonSecondaryColor,
  column,
  children,
}) => {
  const {
    isEditing,
    title,
    description,
    priority,
    handleSave,
    handlePriorityChange,
    handleTitleChange,
    handleDescriptionChange,
    startEditing,
  } = useAddTask({ column });

  return (
    <Container>
      {isEditing ? (
        <TaskForm>
          <Select value={priority ?? ''} onChange={handlePriorityChange}>
            {PRIORITY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <TitleInput
            placeholder={TEXT.TASK_TITLE}
            value={title}
            onChange={handleTitleChange}
          />
          <DescriptionInput
            placeholder={TEXT.TASK_DESCRIPTION}
            value={description}
            onChange={handleDescriptionChange}
          />
          <SaveButton onClick={handleSave}>{TEXT.SAVE}</SaveButton>
        </TaskForm>
      ) : (
        <TaskButton
          primary={buttonPrimaryColor}
          secondary={buttonSecondaryColor}
          onClick={startEditing}
        >
          {children}
        </TaskButton>
      )}
    </Container>
  );
};

export default AddTaskButton;
