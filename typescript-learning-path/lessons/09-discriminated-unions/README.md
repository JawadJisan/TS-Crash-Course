# 09. Discriminated Unions and Exhaustiveness

**Prerequisite:** Complete the previous lesson.

## Objectives

Model state machines and ensure every variant is handled.

## Explanation

Give each union member a shared literal discriminator. A never assignment in the default branch makes missing cases a compiler error.

> **বাংলা নোট:** প্রতিটি state-এ একই discriminant property রাখলে safe branching সহজ হয়।

## Run the Example

```powershell
npm.cmd run lesson -- typescript-learning-path/lessons/09-discriminated-unions/example.ts
```

## Knowledge Check

What is the purpose of an exhaustive never check?

## Drill

Complete [the exercise](../../exercises/09-discriminated-unions.ts), then compare it with [the solution](../../solutions/09-discriminated-unions.ts).

## Challenge

Extend the example with one extra real-world requirement and keep strict type checking enabled.
