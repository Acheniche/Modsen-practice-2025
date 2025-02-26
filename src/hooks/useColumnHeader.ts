import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { DRAG_DATA_KEYS } from '@/constants/drag';
import {
  removeColumn,
  renameColumn,
  reorderColumns,
  updateColumnColors,
} from '@/store/reducers/TasksSlice';
import { ColumnHeaderProps } from '@/types/ColumnHeaderProps';
import { getLighterColor } from '@/utils/colors';

export const useColumnHeader = ({
  title,
  buttonPrimaryColor,
}: ColumnHeaderProps) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [selectedColor, setSelectedColor] = useState(buttonPrimaryColor);
  const [colorChanged, setColorChanged] = useState(false);

  const handleRename = useCallback(() => {
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
    setIsEditing((prev) => !prev);
    setColorChanged(false);
  }, [dispatch, isEditing, title, newTitle, colorChanged, selectedColor]);

  const handleColorChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedColor(e.target.value);
      setColorChanged(true);
    },
    [],
  );

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewTitle(e.target.value);
    },
    [],
  );

  const handleDelete = useCallback(() => {
    dispatch(removeColumn(title));
  }, [dispatch, title]);

  const handleDragStart = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.dataTransfer.setData(DRAG_DATA_KEYS.COLUMN_NAME, title);
    },
    [title],
  );

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const draggedColumn = event.dataTransfer.getData(
        DRAG_DATA_KEYS.COLUMN_NAME,
      );
      if (draggedColumn && draggedColumn !== title) {
        dispatch(reorderColumns({ from: draggedColumn, to: title }));
      }
    },
    [dispatch, title],
  );

  const handleDragOver = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
    },
    [],
  );

  return {
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
  };
};
