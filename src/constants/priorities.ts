import { PriorityType } from '@/types/Priority';

export const PRIORITY_OPTIONS: { value: PriorityType | ''; label: string }[] = [
  { value: '', label: 'Priority' },
  { value: 'High', label: 'High' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Low', label: 'Low' },
];
