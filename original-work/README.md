# Original Work Archive

This directory preserves the code that existed before the structured curriculum was added. It is organized for navigation while retaining the original learning style, comments, deliberate errors, and project behavior.

## Contents

- `lessons/fundamentals`: primitive types, arrays, objects, and functions
- `lessons/type-modeling`: tuples, enums, literals, unions, types, and interfaces
- `lessons/utility-types`: optional properties and `Omit`
- `lessons/collections`: `Map` and `Set`
- `lessons/generics`: generic functions
- `lessons/async`: typed asynchronous API experiments
- `lessons/oop`: classes, interfaces, modifiers, and inheritance
- `lessons/scratch`: small experiments and empty scratch files
- `generated-javascript`: JavaScript generated from early TypeScript lessons
- `projects`: the original browser, Node.js, Rollup, and Vite projects
- `browser-script-demo`: the original root HTML experiment

## Important Notes

Some archive files are intentionally invalid TypeScript because they were written to observe compiler errors. Their filenames include `intentional-errors` where applicable. The archive is excluded from the new root type-check and lint commands.

Use the [new learning path](../typescript-learning-path/README.md) for corrected explanations, strict examples, exercises, and projects.

## Original Projects

| Project | Location | Purpose |
| --- | --- | --- |
| Newsletter signup | `projects/newsletter-signup` | DOM selection and typed form interaction |
| Node modules | `projects/node-modules` | ES module imports and exports |
| Rollup task manager | `projects/rollup-task-manager` | Multi-file browser application bundled with Rollup |
| Vite demo | `projects/vite-demo` | TypeScript, styles, assets, and Vite |

Each project keeps its original package/configuration files. Build commands should be run from that project directory.
