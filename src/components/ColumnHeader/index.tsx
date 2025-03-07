import { TEXT } from '@constants/text';

import { useColumnHeader } from '@/hooks/useColumnHeader';
import { ColumnHeaderComponentProps } from '@/types/ColumnHeaderComponentProps';

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

const ColumnHeader: React.FC<ColumnHeaderComponentProps> = ({
  buttonPrimaryColor,
  tasks,
  title,
}) => {
  const {
    isEditing,
    newTitle,
    selectedColor,
    handleRename,
    handleColorChange,
    handleTitleChange,
    handleDelete,
    handleDragStart,
    handleDrop,
    handleDragOver,
  } = useColumnHeader({ title, buttonPrimaryColor });

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
            onChange={handleTitleChange}
            autoFocus
            maxLength={20}
          />
          <input
            type="color"
            value={selectedColor}
            onChange={handleColorChange}
          />
          <DeleteButton onClick={handleDelete}>{TEXT.DELETE}</DeleteButton>
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
