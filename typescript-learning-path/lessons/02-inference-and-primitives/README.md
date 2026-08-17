# 02. Inference and Primitive Types

**Prerequisite:** Complete the previous lesson.

## Objectives

Use primitive annotations and know when inference is clearer.

## Explanation

TypeScript infers string, number, boolean, bigint, symbol, null, and undefined. Add annotations at boundaries, not where they merely repeat the value.

> **বাংলা নোট:** সহজ value-তে inference এবং public boundary-তে explicit type ব্যবহার করুন।

## Run the Example

```powershell
npm.cmd run lesson -- typescript-learning-path/lessons/02-inference-and-primitives/example.ts
```

## Knowledge Check

Why is an annotation often unnecessary for a const initialized with a number?

## Drill

Complete [the exercise](../../exercises/02-inference-and-primitives.ts), then compare it with [the solution](../../solutions/02-inference-and-primitives.ts).

## Challenge

Extend the example with one extra real-world requirement and keep strict type checking enabled.
