import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

import type { Task } from './task.js';

export interface TaskRepository {
  list(): Promise<Task[]>;
  find(id: string): Promise<Task | undefined>;
  save(task: Task): Promise<void>;
  remove(id: string): Promise<boolean>;
}

export class MemoryTaskRepository implements TaskRepository {
  private readonly tasks = new Map<string, Task>();

  async list(): Promise<Task[]> {
    return [...this.tasks.values()];
  }

  async find(id: string): Promise<Task | undefined> {
    return this.tasks.get(id);
  }

  async save(task: Task): Promise<void> {
    this.tasks.set(task.id, task);
  }

  async remove(id: string): Promise<boolean> {
    return this.tasks.delete(id);
  }
}

export class JsonTaskRepository implements TaskRepository {
  constructor(private readonly filename: string) {}

  async list(): Promise<Task[]> {
    return this.readAll();
  }

  async find(id: string): Promise<Task | undefined> {
    return (await this.readAll()).find((task) => task.id === id);
  }

  async save(task: Task): Promise<void> {
    const tasks = await this.readAll();
    const index = tasks.findIndex((existing) => existing.id === task.id);
    if (index === -1) tasks.push(task);
    else tasks[index] = task;
    await this.writeAll(tasks);
  }

  async remove(id: string): Promise<boolean> {
    const tasks = await this.readAll();
    const remaining = tasks.filter((task) => task.id !== id);
    if (remaining.length === tasks.length) return false;
    await this.writeAll(remaining);
    return true;
  }

  private async readAll(): Promise<Task[]> {
    try {
      return JSON.parse(await readFile(this.filename, 'utf8')) as Task[];
    } catch (error) {
      if (isMissingFile(error)) return [];
      throw error;
    }
  }

  private async writeAll(tasks: readonly Task[]): Promise<void> {
    await mkdir(path.dirname(this.filename), { recursive: true });
    await writeFile(this.filename, JSON.stringify(tasks, null, 2), 'utf8');
  }
}

function isMissingFile(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error && 'code' in error && error.code === 'ENOENT';
}
