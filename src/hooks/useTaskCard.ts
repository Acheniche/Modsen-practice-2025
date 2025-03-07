import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { removeTask, updateTask } from '@/store/reducers/TasksSlice';
import { PriorityType } from '@/types/Priority';
import { Task } from '@/types/Task';
import { setDragData } from '@/utils/drag';

export const useTaskCard = (task: Task) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState<PriorityType>(
    task.priority || undefined,
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDelete = useCallback(() => {
    dispatch(removeTask({ taskId: task.id, column: task.column }));
  }, [dispatch, task.id, task.column]);

  const handleEdit = useCallback(() => {
    setIsEditing(true);
    setIsMenuOpen(false);
  }, []);

  const handleSave = useCallback(() => {
    dispatch(
      updateTask({
        taskId: task.id,
        column: task.column,
        updatedTask: { title, description, priority },
      }),
    );
    setIsEditing(false);
  }, [dispatch, task.id, task.column, title, description, priority]);

  const handleCancel = useCallback(() => {
    setIsEditing(false);
  }, []);

  const handleDragStart = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      setDragData(event, {
        taskId: task.id.toString(),
        taskColumn: task.column,
      });
    },
    [task.id, task.column],
  );

  const handlePriorityChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setPriority(e.target.value as PriorityType);
    },
    [],
  );

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    [],
  );

  const handleDescriptionChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(e.target.value);
    },
    [],
  );

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return {
    isEditing,
    title,
    description,
    priority,
    isMenuOpen,
    handleDelete,
    handleEdit,
    handleSave,
    handleCancel,
    handleDragStart,
    handlePriorityChange,
    handleTitleChange,
    handleDescriptionChange,
    toggleMenu,
  };
};
