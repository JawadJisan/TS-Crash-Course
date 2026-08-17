# 19. Modules and Imports

**Prerequisite:** Complete the previous lesson.

## Objectives

Split code into files with explicit exports and imports.

## Explanation

A file becomes a module when it has an import or export, preventing accidental global names.

> **বাংলা নোট:** প্রতিটি module-এর dependency import/export দিয়ে স্পষ্ট রাখুন।

## Run the Example

```powershell
npm.cmd run lesson -- typescript-learning-path/lessons/19-modules-and-imports/example.ts
```

## Knowledge Check

Why does adding `export {}` change file checking?

## Drill

Complete [the exercise](../../exercises/19-modules-and-imports.ts), then compare it with [the solution](../../solutions/19-modules-and-imports.ts).

## Challenge

Extend the example with one extra real-world requirement and keep strict type checking enabled.
