import { z } from 'zod';

export const taskStatuses = ['todo', 'in-progress', 'done'] as const;

export const createTaskSchema = z
  .object({
    title: z.string().trim().min(1).max(120),
    description: z.string().trim().max(500).optional(),
    status: z.enum(taskStatuses).default('todo'),
  })
  .strict();

export const updateTaskSchema = createTaskSchema
  .partial()
  .refine((value) => Object.keys(value).length > 0, 'Provide at least one field.');

export type TaskStatus = (typeof taskStatuses)[number];
export type CreateTaskInput = z.input<typeof createTaskSchema>;
export type ValidatedCreateTaskInput = z.output<typeof createTaskSchema>;
export type UpdateTaskInput = z.output<typeof updateTaskSchema>;

export interface Task {
  readonly id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  readonly createdAt: string;
  updatedAt: string;
}
