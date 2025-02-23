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
import { useDispatch } from 'react-redux';
import { addTask } from '@/store/reducers/TasksSlice';
import { PriorityType } from '@/types/Priority';

const AddTaskButton: React.FC<{
  buttonPrimaryColor: string;
  buttonSecondaryColor: string;
  column: string;
  children: React.ReactNode;
}> = ({ buttonPrimaryColor, buttonSecondaryColor, column, children }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<PriorityType>(undefined);

  const handleSave = () => {
    if (title.trim()) {
      dispatch(
        addTask({
          column,
          task: { id: Date.now(), title, description, priority },
        }),
      );
      setTitle('');
      setDescription('');
      setPriority(undefined);
      setIsEditing(false);
    } else {
      setTitle('');
      setDescription('');
      setPriority(undefined);
      setIsEditing(false);
    }
  };

  return (
    <Container>
      {isEditing ? (
        <TaskForm>
          <Select
            value={priority ?? ''}
            onChange={(e) => setPriority(e.target.value as PriorityType)}
          >
            <option value="">Priority</option>
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
