import express, { type ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

import { NotFoundError } from './errors.js';
import type { TaskService } from './service.js';
import { createTaskSchema, updateTaskSchema } from './task.js';

export function createApp(service: TaskService): express.Express {
  const app = express();
  app.use(express.json({ limit: '32kb' }));

  app.get('/health', (_request, response) => response.json({ status: 'ok' }));
  app.get('/tasks', async (_request, response) => response.json(await service.list()));
  app.get('/tasks/:id', async (request, response) =>
    response.json(await service.get(request.params.id)),
  );
  app.post('/tasks', async (request, response) => {
    const task = await service.create(createTaskSchema.parse(request.body));
    response.status(201).json(task);
  });
  app.patch('/tasks/:id', async (request, response) => {
    response.json(
      await service.update(request.params.id, updateTaskSchema.parse(request.body)),
    );
  });
  app.delete('/tasks/:id', async (request, response) => {
    await service.remove(request.params.id);
    response.status(204).end();
  });

  app.use((_request, response) =>
    response.status(404).json({ error: 'Route not found.' }),
  );
  app.use(errorHandler);
  return app;
}

const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  if (error instanceof ZodError) {
    response.status(400).json({ error: 'Validation failed.', issues: error.issues });
    return;
  }
  if (error instanceof NotFoundError) {
    response.status(404).json({ error: error.message });
    return;
  }
  console.error(error);
  response.status(500).json({ error: 'Internal server error.' });
};
