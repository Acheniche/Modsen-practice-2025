import { TaskBoard } from './styled';
import ProgressColumn from '../ProgressColumn';

const KanbanBoard = () => {
  const tasks = {
    todo: [
      {
        id: 1,
        title: 'UI/UX Design in the age of AI',
        description:
          'Lorem ipsum dolor sit amet libre unst consectetur adispicing elit',
        priority: 'Medium' as const,
      },
      {
        id: 2,
        title: 'Blog Copywriting',
        description:
          'Lorem ipsum dolor sit amet libre unst consectetur adispicing elit',
        priority: undefined,
      },
    ],
    inProgress: [
      {
        id: 3,
        title: 'User flow confirmation for finance app',
        description:
          'Lorem ipsum dolor sit amet libre unst consectetur adispicing elit',
        priority: 'Medium' as const,
      },
      {
        id: 4,
        title: 'Healthcare app wireframe flow',
        description:
          'Lorem ipsum dolor sit amet libre unst consectetur adispicing elit',
        priority: 'Medium' as const,
      },
    ],
    done: [
      {
        id: 5,
        title: 'UI/UX Design in the age of AI',
        description:
          'Lorem ipsum dolor sit amet libre unst consectetur adispicing elit',
        priority: 'High' as const,
      },
      {
        id: 6,
        title: 'UI/UX Design in the age of AI',
        description:
          'Lorem ipsum dolor sit amet libre unst consectetur adispicing elit',
        priority: 'Low' as const,
      },
      {
        id: 7,
        title: 'UI/UX Design in the age of AI',
        description:
          'Lorem ipsum dolor sit amet libre unst consectetur adispicing elit',
        priority: undefined,
      },
    ],
  };

  return (
    <TaskBoard>
      <ProgressColumn
        title="To Do"
        tasks={tasks.todo}
        color="#4F46E5"
        buttonPrimaryColor=" #4F46E5"
        buttonSecondaryColor=" #EEF2FF"
      />
      <ProgressColumn
        title="In Progress"
        tasks={tasks.inProgress}
        color="#F59E0B"
        buttonPrimaryColor="#F59E0B"
        buttonSecondaryColor=" #FFFBEB"
      />
      <ProgressColumn
        title="Done"
        tasks={tasks.done}
        color="#22C55E"
        buttonPrimaryColor="#22C55E"
        buttonSecondaryColor=" #F0FDF4"
      />
    </TaskBoard>
  );
};

export default KanbanBoard;
