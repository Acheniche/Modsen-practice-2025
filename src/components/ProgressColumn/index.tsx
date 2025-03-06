import AddTaskButton from '@components/AddTaskButton';
import ColumnHeader from '@components/ColumnHeader';
import { Column } from '@components/ProgressColumn/styled';
import TaskCard from '@components/TaskCard';
import { TEXT } from '@constants/text';

import { useDragAndDrop } from '@/hooks/useDragAndDrop';
import { ColumnProps } from '@/types/ColumnProps';

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
        {TEXT.ADD_TASK}
      </AddTaskButton>
    </Column>
  );
};

export default ProgressColumn;
