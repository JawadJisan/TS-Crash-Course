import path from 'node:path';

import { createApp } from './app.js';
import { JsonTaskRepository } from './repository.js';
import { TaskService } from './service.js';

const port = Number(process.env.PORT ?? 3000);
const filename = process.env.TASK_DATA_FILE ?? path.resolve('.data/tasks.json');
const app = createApp(new TaskService(new JsonTaskRepository(filename)));

app.listen(port, () => {
  console.log(`Task API listening at http://localhost:${port}`);
});
