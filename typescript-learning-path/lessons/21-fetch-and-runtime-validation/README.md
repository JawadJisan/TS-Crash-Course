# 21. Fetch and Runtime Validation

**Prerequisite:** Complete the previous lesson.

## Objectives

Treat JSON as unknown and validate it before use.

## Explanation

TypeScript cannot inspect runtime data. A parser or schema must check external values at the boundary.

> **বাংলা নোট:** API response compile-time type guarantee করে না।

## Run the Example

```powershell
npm.cmd run lesson -- typescript-learning-path/lessons/21-fetch-and-runtime-validation/example.ts
```

## Knowledge Check

Why can a server response violate an interface?

## Drill

Complete [the exercise](../../exercises/21-fetch-and-runtime-validation.ts), then compare it with [the solution](../../solutions/21-fetch-and-runtime-validation.ts).

## Challenge

Extend the example with one extra real-world requirement and keep strict type checking enabled.
