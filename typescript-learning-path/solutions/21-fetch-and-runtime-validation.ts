export type User = { id: number; name: string };
export function parseUser(value: unknown): User {
  if (typeof value !== 'object' || value === null)
    throw new Error('User must be an object');
  const item = value as Record<string, unknown>;
  if (typeof item.id !== 'number' || typeof item.name !== 'string')
    throw new Error('Invalid user');
  return { id: item.id, name: item.name };
}
