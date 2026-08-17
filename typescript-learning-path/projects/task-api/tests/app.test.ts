import request from 'supertest';
import { describe, expect, it } from 'vitest';

import { createApp } from '../src/app.js';
import { MemoryTaskRepository } from '../src/repository.js';
import { TaskService } from '../src/service.js';

function testApp() {
  const service = new TaskService(
    new MemoryTaskRepository(),
    () => 'task-1',
    () => new Date('2026-08-17T10:00:00.000Z'),
  );
  return createApp(service);
}

describe('task API', () => {
  it('creates, reads, updates, and deletes a task', async () => {
    const app = testApp();
    const created = await request(app)
      .post('/tasks')
      .send({ title: 'Learn TypeScript' })
      .expect(201);
    expect(created.body).toMatchObject({
      id: 'task-1',
      title: 'Learn TypeScript',
      status: 'todo',
    });

    await request(app).get('/tasks/task-1').expect(200);
    const updated = await request(app)
      .patch('/tasks/task-1')
      .send({ status: 'done' })
      .expect(200);
    expect(updated.body.status).toBe('done');
    await request(app).delete('/tasks/task-1').expect(204);
    await request(app).get('/tasks/task-1').expect(404);
  });

  it('rejects invalid input', async () => {
    const response = await request(testApp())
      .post('/tasks')
      .send({ title: '' })
      .expect(400);
    expect(response.body.error).toBe('Validation failed.');
  });
});
