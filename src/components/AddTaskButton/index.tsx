import { Container, TaskButton } from './styled';
import { ColumnProps } from '@/types/ColumnProps';

const AddTaskButton: React.FC<
  Pick<ColumnProps, 'buttonPrimaryColor' | 'buttonSecondaryColor'> & {
    children: React.ReactNode;
  }
> = ({ buttonPrimaryColor, buttonSecondaryColor, children }) => {
  return (
    <Container>
      <TaskButton primary={buttonPrimaryColor} secondary={buttonSecondaryColor}>
        {children}
      </TaskButton>
    </Container>
  );
};

export default AddTaskButton;
