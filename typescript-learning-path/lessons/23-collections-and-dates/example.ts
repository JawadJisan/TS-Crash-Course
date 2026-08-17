const tags = new Set(['typescript', 'web', 'typescript']);
const visits = new Map<string, number>([['home', 10]]);
console.log([...tags], visits.get('home'));
export {};
