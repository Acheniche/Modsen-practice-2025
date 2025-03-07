import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from '@/store/reducers/TasksSlice';
import { AddTaskProps } from '@/types/AddTaskProps';
import { PriorityType } from '@/types/Priority';

export const useAddTask = ({ column }: AddTaskProps) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<PriorityType | undefined>(undefined);

  const resetForm = useCallback(() => {
    setTitle('');
    setDescription('');
    setPriority(undefined);
    setIsEditing(false);
  }, []);

  const handleSave = useCallback(() => {
    if (title.trim()) {
      dispatch(
        addTask({
          column,
          task: { id: Date.now(), title, description, priority },
        }),
      );
    }
    resetForm();
  }, [dispatch, column, title, description, priority, resetForm]);

  const handleCancel = useCallback(() => {
    resetForm();
  }, [resetForm]);

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

  const startEditing = useCallback(() => {
    setIsEditing(true);
  }, []);

  return {
    isEditing,
    title,
    description,
    priority,
    handleSave,
    handleCancel,
    handlePriorityChange,
    handleTitleChange,
    handleDescriptionChange,
    startEditing,
  };
};
