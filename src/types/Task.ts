export interface Task {
  id: number;
  title: string;
  description: string;
  priority?: 'High' | 'Medium' | 'Low' | undefined;
  column: string;
}
