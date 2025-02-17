import { ColumnProps } from '@/types/ColumnProps';
import {
  ColumnHeaderWrapper,
  Horizontal,
  Plus,
  StyledColumnHeader,
  TasksCounter,
  Vertical,
} from './styled';

const ColumnHeader: React.FC<
  Pick<ColumnProps, 'buttonPrimaryColor' | 'tasks' | 'title'>
> = ({ buttonPrimaryColor, tasks, title }) => {
  return (
    <ColumnHeaderWrapper primary={buttonPrimaryColor}>
      <TasksCounter primary={buttonPrimaryColor}>{tasks.length}</TasksCounter>
      <StyledColumnHeader>{title}</StyledColumnHeader>
      <Plus>
        <Vertical />
        <Horizontal />
      </Plus>
    </ColumnHeaderWrapper>
  );
};

export default ColumnHeader;
