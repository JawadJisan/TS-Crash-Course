# 15. Keyof, Typeof, and Indexed Access

**Prerequisite:** Complete the previous lesson.

## Objectives

Derive key and value types from existing declarations.

## Explanation

Keyof creates a union of keys. Typeof captures a value's static type. Indexed access selects a property type, keeping definitions linked.

> **বাংলা নোট:** Existing type/value থেকে নতুন type derive করলে duplication কমে।

## Run the Example

```powershell
npm.cmd run lesson -- typescript-learning-path/lessons/15-keyof-typeof-and-indexed-access/example.ts
```

## Knowledge Check

What type does `User['id']` produce?

## Drill

Complete [the exercise](../../exercises/15-keyof-typeof-and-indexed-access.ts), then compare it with [the solution](../../solutions/15-keyof-typeof-and-indexed-access.ts).

## Challenge

Extend the example with one extra real-world requirement and keep strict type checking enabled.
