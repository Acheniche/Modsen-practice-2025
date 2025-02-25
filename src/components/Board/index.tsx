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
      <div>
        {Object.entries(columns).map(([columnName, config]) => (
          <ProgressColumn
            key={columnName}
            title={columnName}
            tasks={config.tasks}
            color={config.colors.primary}
            buttonPrimaryColor={config.colors.primary}
            buttonSecondaryColor={config.colors.secondary}
          />
        ))}
      </div>
    </TaskBoard>
  );
};

export default KanbanBoard;
