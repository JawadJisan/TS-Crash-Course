# 30. Typed HTTP Boundaries

**Prerequisite:** Complete the previous lesson.

## Objectives

Design typed request and response boundaries for APIs.

## Explanation

Validate HTTP input, map domain failures to status codes, and keep transport separate from domain logic.

> **বাংলা নোট:** HTTP boundary-তে validation অপরিহার্য।

## Run the Example

```powershell
npm.cmd run lesson -- typescript-learning-path/lessons/30-typed-http-boundaries/example.ts
```

## Knowledge Check

Which layer should validate request data?

## Drill

Complete [the exercise](../../exercises/30-typed-http-boundaries.ts), then compare it with [the solution](../../solutions/30-typed-http-boundaries.ts).

## Challenge

Extend the example with one extra real-world requirement and keep strict type checking enabled.
