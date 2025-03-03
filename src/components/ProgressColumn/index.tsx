import AddTaskButton from '@components/AddTaskButton';
import ColumnHeader from '@components/ColumnHeader';
import TaskCard from '@components/TaskCard';

import { useDragAndDrop } from '@/hooks/useDragAndDrop';
import { ColumnProps } from '@/types/ColumnProps';

import { Column } from './styled';

const ProgressColumn: React.FC<ColumnProps> = ({
  title,
  tasks,
  color,
  buttonPrimaryColor,
  buttonSecondaryColor,
}) => {
  const { handleDrop, handleDragOver } = useDragAndDrop({ title, tasks });

  return (
    <Column color={color} onDragOver={handleDragOver} onDrop={handleDrop}>
      <ColumnHeader
        buttonPrimaryColor={buttonPrimaryColor}
        tasks={tasks}
        title={title}
      />
      {tasks.map((task) => (
        <div
          key={task.id}
          data-task-id={task.id}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <TaskCard task={task} />
        </div>
      ))}
      <AddTaskButton
        buttonPrimaryColor={buttonPrimaryColor}
        buttonSecondaryColor={buttonSecondaryColor}
        column={title}
      >
        Add Task...
      </AddTaskButton>
    </Column>
  );
};

export default ProgressColumn;
