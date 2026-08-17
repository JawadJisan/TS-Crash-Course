import path from 'node:path';
const filename = process.argv[2] ?? 'notes.json';
console.log(path.resolve(filename));
