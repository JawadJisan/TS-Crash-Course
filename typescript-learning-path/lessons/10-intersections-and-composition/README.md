# 10. Intersections and Type Composition

**Prerequisite:** Complete the previous lesson.

## Objectives

Combine small contracts while avoiding impossible intersections.

## Explanation

Intersection types require all combined members. They are useful for capabilities, but conflicting property types can create never.

> **বাংলা নোট:** Intersection মানে সব contract একসাথে পূরণ করতে হবে।

## Run the Example

```powershell
npm.cmd run lesson -- typescript-learning-path/lessons/10-intersections-and-composition/example.ts
```

## Knowledge Check

What happens when intersected properties have incompatible types?

## Drill

Complete [the exercise](../../exercises/10-intersections-and-composition.ts), then compare it with [the solution](../../solutions/10-intersections-and-composition.ts).

## Challenge

Extend the example with one extra real-world requirement and keep strict type checking enabled.
