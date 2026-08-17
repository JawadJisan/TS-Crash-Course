# 11. Optional, Readonly, and Nullability

**Prerequisite:** Complete the previous lesson.

## Objectives

Model absence and mutation constraints explicitly.

## Explanation

Optional means a property may be absent. A property can also exist with undefined, which is a different contract. Strict null checks force absence handling.

> **বাংলা নোট:** Optional property এবং undefined value এক contract নয়।

## Run the Example

```powershell
npm.cmd run lesson -- typescript-learning-path/lessons/11-optional-readonly-and-nullability/example.ts
```

## Knowledge Check

How does `name?: string` differ from `name: string | undefined`?

## Drill

Complete [the exercise](../../exercises/11-optional-readonly-and-nullability.ts), then compare it with [the solution](../../solutions/11-optional-readonly-and-nullability.ts).

## Challenge

Extend the example with one extra real-world requirement and keep strict type checking enabled.
