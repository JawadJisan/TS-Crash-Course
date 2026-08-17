# TypeScript Learning Path

This is an ordered basic-to-intermediate TypeScript course for browser and Node.js development. Complete the lessons in sequence, type the examples yourself, attempt each drill before opening its solution, and build the capstones after the relevant modules.

## How to Study

1. Read the lesson objectives and explanation.
2. Predict the example output before running it.
3. Run `npm run lesson -- <example-path>`.
4. Answer the knowledge check without looking back.
5. Complete the matching file in `exercises`.
6. Compare with `solutions` only after making a real attempt.
7. Use `npm test` and `npm run typecheck` for feedback.

> **বাংলা নোট:** প্রতিটি কঠিন বিষয়ের পরে ছোট বাংলা ব্যাখ্যা আছে। আগে নিজে কোড লিখুন, তারপর solution দেখুন।

## Modules

| Module           | Lessons | Outcome                                                             |
| ---------------- | ------- | ------------------------------------------------------------------- |
| Foundations      | 01–06   | Configure TypeScript and model basic values and functions           |
| Type modeling    | 07–13   | Design safe object and union-based application types                |
| Reusable types   | 14–18   | Use utility types, type operators, and generics                     |
| Application code | 19–23   | Work with modules, async flows, validation, collections, and errors |
| Architecture     | 24–26   | Apply OOP, composition, dependency injection, and tests             |
| Browser and Node | 27–30   | Build typed browser and Node.js programs                            |

## Capstones

- [Browser Expense Tracker](projects/expense-tracker/README.md)
- [Node Task API](projects/task-api/README.md)

## Course Rules

- New code uses `strict: true` and avoids `any`.
- Use `unknown` at external boundaries and validate before trusting data.
- Expected compiler failures use `@ts-expect-error` so checks remain green.
- Examples favor small functions, explicit domain types, and testable boundaries.
