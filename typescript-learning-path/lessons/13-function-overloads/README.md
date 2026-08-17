# 13. Function Overloads

**Prerequisite:** Complete the previous lesson.

## Objectives

Describe APIs whose output depends on distinct input shapes.

## Explanation

Overload signatures present allowed calls; one implementation handles their union. Prefer unions when the return type does not depend on the input.

> **বাংলা নোট:** Input অনুযায়ী return type বদলালে overload কার্যকর।

## Run the Example

```powershell
npm.cmd run lesson -- typescript-learning-path/lessons/13-function-overloads/example.ts
```

## Knowledge Check

When is a union parameter simpler than overloads?

## Drill

Complete [the exercise](../../exercises/13-function-overloads.ts), then compare it with [the solution](../../solutions/13-function-overloads.ts).

## Challenge

Extend the example with one extra real-world requirement and keep strict type checking enabled.
