import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  removeColumn,
  renameColumn,
  reorderColumns,
  updateColumnColors,
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

const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : [0, 0, 0];
};

const getLighterColor = (hex: string): string => {
  const [r, g, b] = hexToRgb(hex);
  const factor = 0.9;
  const newR = Math.min(255, Math.round(r + (255 - r) * factor));
  const newG = Math.min(255, Math.round(g + (255 - g) * factor));
  const newB = Math.min(255, Math.round(b + (255 - b) * factor));
  return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
};

const ColumnHeader: React.FC<
  Pick<ColumnProps, 'buttonPrimaryColor' | 'tasks' | 'title'>
> = ({ buttonPrimaryColor, tasks, title }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [selectedColor, setSelectedColor] = useState(buttonPrimaryColor);
  const [colorChanged, setColorChanged] = useState(false);

  const handleRename = () => {
    if (isEditing) {
      const targetColumn = newTitle.trim() || title;
      if (newTitle.trim() && newTitle !== title) {
        dispatch(renameColumn({ oldName: title, newName: newTitle.trim() }));
      }
      if (colorChanged) {
        const secondaryColor = getLighterColor(selectedColor);
        dispatch(
          updateColumnColors({
            column: targetColumn,
            colors: { primary: selectedColor, secondary: secondaryColor },
          }),
        );
      }
    }
    setIsEditing(!isEditing);
    setColorChanged(false);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.value);
    setColorChanged(true);
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
          <input
            type="color"
            value={selectedColor}
            onChange={handleColorChange}
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
