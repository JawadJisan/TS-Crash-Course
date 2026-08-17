# 18. Generic API Response Shapes

**Prerequisite:** Complete the previous lesson.

## Objectives

Represent reusable success envelopes and paginated responses.

## Explanation

Generic wrappers describe payload metadata without duplicating every endpoint shape.

> **বাংলা নোট:** একটি generic envelope বহু endpoint-এর response shape এক রাখে।

## Run the Example

```powershell
npm.cmd run lesson -- typescript-learning-path/lessons/18-generic-api-shapes/example.ts
```

## Knowledge Check

What type should `Page<T>` use for its items?

## Drill

Complete [the exercise](../../exercises/18-generic-api-shapes.ts), then compare it with [the solution](../../solutions/18-generic-api-shapes.ts).

## Challenge

Extend the example with one extra real-world requirement and keep strict type checking enabled.
