# TypeScript Crash Course

An English-first, Bangla-supported learning repository for TypeScript development. It contains a structured basic-to-intermediate curriculum, drills with separate solutions, browser and Node.js capstones, and an archive of the code that started this repository.

## Start Here

1. Install [Node.js 20+](https://nodejs.org/).
2. Run `npm install` (or `npm.cmd install` in PowerShell if script execution is restricted).
3. Open [the learning path](typescript-learning-path/README.md).
4. Start with lesson 01 and run its example:

```powershell
npm.cmd run lesson -- typescript-learning-path/lessons/01-tooling-and-first-program/example.ts
```

## Repository Map

```text
typescript-learning-path/
  lessons/       # 30 ordered lessons
  exercises/     # unsolved drills
  solutions/     # reviewed answers
  projects/      # browser and Node.js capstones
  tests/         # automated checks for selected learning code
original-work/   # organized archive of the original repository
```

## Useful Commands

| Command                    | Purpose                                |
| -------------------------- | -------------------------------------- |
| `npm run lesson -- <file>` | Run a TypeScript example directly      |
| `npm run typecheck`        | Check curriculum and workspace types   |
| `npm test`                 | Run automated tests                    |
| `npm run lint`             | Check code quality                     |
| `npm run format:check`     | Check formatting                       |
| `npm run build`            | Build both capstones                   |
| `npm run check`            | Run the complete verification workflow |

On Windows PowerShell, replace `npm` with `npm.cmd` when the local execution policy blocks `npm.ps1`.

## Learning Areas

- TypeScript fundamentals and strict compiler configuration
- Functions, object modeling, unions, narrowing, and generics
- Advanced type operators and reusable type patterns
- Async code, APIs, runtime validation, and error handling
- Classes, composition, dependency injection, and testing
- Typed DOM, forms, Fetch, local storage, Node.js, files, CLIs, and HTTP

The new curriculum contains clean, strict examples. Deliberately broken historical examples are isolated and explained in [original-work](original-work/README.md).
