# 06. Unknown, Never, and Safe Boundaries

**Prerequisite:** Complete the previous lesson.

## Objectives

Use unknown for untrusted values and never for impossible completion.

## Explanation

Any disables checking. Unknown requires validation before use. Never describes a function that throws or a state that cannot exist.

> **বাংলা নোট:** External data-কে unknown ধরে validate করুন।

## Run the Example

```powershell
npm.cmd run lesson -- typescript-learning-path/lessons/06-unknown-never-and-safe-boundaries/example.ts
```

## Knowledge Check

Why is unknown safer than any?

## Drill

Complete [the exercise](../../exercises/06-unknown-never-and-safe-boundaries.ts), then compare it with [the solution](../../solutions/06-unknown-never-and-safe-boundaries.ts).

## Challenge

Extend the example with one extra real-world requirement and keep strict type checking enabled.
