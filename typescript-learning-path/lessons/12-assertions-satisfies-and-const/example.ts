type Routes = Record<string, '/' | '/about'>;
const routes = { home: '/', about: '/about' } satisfies Routes;
const roles = ['admin', 'editor'] as const;
console.log(routes, roles);
export {};
