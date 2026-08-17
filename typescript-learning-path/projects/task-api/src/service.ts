import { randomUUID } from 'node:crypto';

import { NotFoundError } from './errors.js';
import type { TaskRepository } from './repository.js';
import type { Task, UpdateTaskInput, ValidatedCreateTaskInput } from './task.js';

export class TaskService {
  constructor(
    private readonly repository: TaskRepository,
    private readonly createId: () => string = randomUUID,
    private readonly now: () => Date = () => new Date(),
  ) {}

  async list(): Promise<Task[]> {
    const tasks = await this.repository.list();
    return tasks.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }

  async get(id: string): Promise<Task> {
    const task = await this.repository.find(id);
    if (!task) throw new NotFoundError('Task', id);
    return task;
  }

  async create(input: ValidatedCreateTaskInput): Promise<Task> {
    const timestamp = this.now().toISOString();
    const task: Task = {
      id: this.createId(),
      title: input.title,
      status: input.status,
      createdAt: timestamp,
      updatedAt: timestamp,
      ...(input.description ? { description: input.description } : {}),
    };
    await this.repository.save(task);
    return task;
  }

  async update(id: string, input: UpdateTaskInput): Promise<Task> {
    const current = await this.get(id);
    const task: Task = {
      ...current,
      ...input,
      updatedAt: this.now().toISOString(),
    };
    await this.repository.save(task);
    return task;
  }

  async remove(id: string): Promise<void> {
    if (!(await this.repository.remove(id))) throw new NotFoundError('Task', id);
  }
}
