import { useState } from 'react';
import {
  Container,
  DescriptionInput,
  SaveButton,
  Select,
  TaskButton,
  TaskForm,
  TitleInput,
} from './styled';
import { ColumnProps } from '@/types/ColumnProps';

const AddTaskButton: React.FC<
  Pick<ColumnProps, 'buttonPrimaryColor' | 'buttonSecondaryColor'> & {
    children: React.ReactNode;
  }
> = ({ buttonPrimaryColor, buttonSecondaryColor, children }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Priority');

  const handleSave = () => {
    if (title.trim()) {
      console.log({ title, description, priority });
      setTitle('');
      setDescription('');
      setIsEditing(false);
    } else {
      setTitle('');
      setDescription('');
      setIsEditing(false);
    }
  };

  return (
    <Container>
      {isEditing ? (
        <TaskForm>
          <Select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="undefined">Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Select>
          <TitleInput
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <DescriptionInput
            placeholder="Add description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </TaskForm>
      ) : (
        <TaskButton
          primary={buttonPrimaryColor}
          secondary={buttonSecondaryColor}
          onClick={() => setIsEditing(true)}
        >
          {children}
        </TaskButton>
      )}
    </Container>
  );
};

export default AddTaskButton;
