# 28. Browser State, Forms, and Local Storage

**Prerequisite:** Complete the previous lesson.

## Objectives

Model UI state and serialize data safely.

## Explanation

Local storage stores strings, so JSON parsing and validation are required. Keep state transitions testable without DOM.

> **বাংলা নোট:** localStorage string রাখে; parse-এর পরে validate করুন।

## Run the Example

```powershell
npm.cmd run lesson -- typescript-learning-path/lessons/28-browser-state-and-storage/example.ts
```

## Knowledge Check

What should invalid stored JSON do?

## Drill

Complete [the exercise](../../exercises/28-browser-state-and-storage.ts), then compare it with [the solution](../../solutions/28-browser-state-and-storage.ts).

## Challenge

Extend the example with one extra real-world requirement and keep strict type checking enabled.
