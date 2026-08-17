# 12. Assertions, Satisfies, and Const Assertions

**Prerequisite:** Complete the previous lesson.

## Objectives

Use type assertions sparingly and preserve useful literal information.

## Explanation

An assertion tells the compiler to trust you and adds no runtime check. Satisfies verifies a shape without replacing inference. As const makes literals deeply readonly.

> **বাংলা নোট:** Assertion runtime validation করে না; satisfies shape check করে inference রাখে।

## Run the Example

```powershell
npm.cmd run lesson -- typescript-learning-path/lessons/12-assertions-satisfies-and-const/example.ts
```

## Knowledge Check

Why is satisfies usually safer than asserting an object as a type?

## Drill

Complete [the exercise](../../exercises/12-assertions-satisfies-and-const.ts), then compare it with [the solution](../../solutions/12-assertions-satisfies-and-const.ts).

## Challenge

Extend the example with one extra real-world requirement and keep strict type checking enabled.
