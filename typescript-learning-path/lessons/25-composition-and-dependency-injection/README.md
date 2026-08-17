# 25. Composition and Dependency Injection

**Prerequisite:** Complete the previous lesson.

## Objectives

Compose services and inject capabilities for testability.

## Explanation

Dependency injection means receiving an interface instead of constructing a concrete dependency internally.

> **বাংলা নোট:** Dependency inject করলে test-এ fake ব্যবহার সহজ।

## Run the Example

```powershell
npm.cmd run lesson -- typescript-learning-path/lessons/25-composition-and-dependency-injection/example.ts
```

## Knowledge Check

Why inject a clock or ID generator?

## Drill

Complete [the exercise](../../exercises/25-composition-and-dependency-injection.ts), then compare it with [the solution](../../solutions/25-composition-and-dependency-injection.ts).

## Challenge

Extend the example with one extra real-world requirement and keep strict type checking enabled.
