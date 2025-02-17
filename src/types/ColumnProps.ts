import { Task } from './Task';

export interface ColumnProps {
  title: string;
  tasks: Task[];
  color: string;
  buttonPrimaryColor: string;
  buttonSecondaryColor: string;
}
