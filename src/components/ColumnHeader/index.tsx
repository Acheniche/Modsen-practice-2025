import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  removeColumn,
  renameColumn,
  reorderColumns,
} from '@/store/reducers/TasksSlice';
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

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('columnName', title);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const draggedColumn = event.dataTransfer.getData('columnName');
    if (draggedColumn && draggedColumn !== title) {
      dispatch(reorderColumns({ from: draggedColumn, to: title }));
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  return (
    <ColumnHeaderWrapper
      primary={buttonPrimaryColor}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
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
