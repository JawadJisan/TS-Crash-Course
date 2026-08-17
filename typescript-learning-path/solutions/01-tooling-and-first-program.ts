export function formatWelcome(name: string, visits: number): string {
  const noun = visits === 1 ? 'visit' : 'visits';
  return 'Welcome, ' + name + '. You have ' + visits + ' ' + noun + '.';
}
