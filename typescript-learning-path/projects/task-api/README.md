# Node Task API

A strict TypeScript REST API demonstrating validation, service/repository separation, dependency injection, JSON-file persistence, centralized error handling, and integration tests.

```powershell
npm.cmd install
npm.cmd run dev --workspace @ts-course/task-api
```

The server defaults to `http://localhost:3000` and stores local data under `.data/tasks.json`.

## Endpoints

- `GET /health`
- `GET /tasks`
- `GET /tasks/:id`
- `POST /tasks`
- `PATCH /tasks/:id`
- `DELETE /tasks/:id`

Create body:

```json
{ "title": "Complete lesson 30", "description": "Build the API", "status": "todo" }
```
