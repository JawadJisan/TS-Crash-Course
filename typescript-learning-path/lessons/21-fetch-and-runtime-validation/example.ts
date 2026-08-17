type User = { id: number; name: string };
function isUser(value: unknown): value is User {
  if (typeof value !== 'object' || value === null) return false;
  const item = value as Record<string, unknown>;
  return typeof item.id === 'number' && typeof item.name === 'string';
}
console.log(isUser({ id: 1, name: 'Amina' }));
export {};
