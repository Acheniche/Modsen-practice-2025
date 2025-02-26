import { ColumnProps } from '@/types/ColumnProps';

export type ColumnHeaderComponentProps = Pick<
  ColumnProps,
  'buttonPrimaryColor' | 'tasks' | 'title'
>;
