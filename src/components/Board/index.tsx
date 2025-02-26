import { useKanbanBoard } from '@/hooks/useKanbanBoard';

import ProgressColumn from '../ProgressColumn';
import { TaskBoard } from './styled';

const KanbanBoard = () => {
  const { columns } = useKanbanBoard();

  const renderColumn = ([columnName, config]: [
    string,
    (typeof columns)[string],
  ]) => (
    <ProgressColumn
      key={columnName}
      title={columnName}
      tasks={config.tasks}
      color={config.colors.primary}
      buttonPrimaryColor={config.colors.primary}
      buttonSecondaryColor={config.colors.secondary}
    />
  );

  return (
    <TaskBoard>
      <div>{Object.entries(columns).map(renderColumn)}</div>
    </TaskBoard>
  );
};

export default KanbanBoard;
