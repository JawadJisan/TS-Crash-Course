export type Filter = 'all' | 'active' | 'completed';

export type Task = {
  id: number;
  text: string;
  completed: boolean;
};
