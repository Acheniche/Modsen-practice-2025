import { ColumnProps } from '@/types/ColumnProps';
import {
  ColumnHeaderWrapper,
  DeleteButton,
  EditInput,
  Horizontal,
  Plus,
  StyledColumnHeader,
  TasksCounter,
  Vertical,
} from './styled';
import { useDispatch } from 'react-redux';
import { removeColumn, renameColumn } from '@/store/reducers/TasksSlice';
import { useState } from 'react';

const ColumnHeader: React.FC<
  Pick<ColumnProps, 'buttonPrimaryColor' | 'tasks' | 'title'>
> = ({ buttonPrimaryColor, tasks, title }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleRename = () => {
    if (isEditing && newTitle.trim() && newTitle !== title) {
      dispatch(renameColumn({ oldName: title, newName: newTitle.trim() }));
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    dispatch(removeColumn(title));
  };

  return (
    <ColumnHeaderWrapper primary={buttonPrimaryColor}>
      <TasksCounter primary={buttonPrimaryColor}>{tasks.length}</TasksCounter>
      {isEditing ? (
        <>
          <EditInput
            primary={buttonPrimaryColor}
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            autoFocus
          />
          <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        </>
      ) : (
        <StyledColumnHeader>{title}</StyledColumnHeader>
      )}
      <Plus onClick={handleRename}>
        <Vertical />
        <Horizontal />
      </Plus>
    </ColumnHeaderWrapper>
  );
};

export default ColumnHeader;
