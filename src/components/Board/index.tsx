import { RootState } from '@store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setTasks } from '@/store/reducers/TasksSlice';

import ProgressColumn from '../ProgressColumn';
import { TaskBoard } from './styled';

const KanbanBoard = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state: RootState) => state.tasks.columns);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      dispatch(setTasks(JSON.parse(savedTasks)));
    }
  }, [dispatch]);

  return (
    <TaskBoard>
      {Object.keys(columns).map((column) => (
        <ProgressColumn
          key={column}
          title={column}
          tasks={columns[column]}
          color="#4F46E5"
          buttonPrimaryColor="#4F46E5"
          buttonSecondaryColor="#EEF2FF"
        />
      ))}
    </TaskBoard>
  );
};

export default KanbanBoard;
