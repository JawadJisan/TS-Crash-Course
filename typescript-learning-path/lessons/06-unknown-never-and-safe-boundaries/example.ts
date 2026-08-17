function readMessage(value: unknown): string {
  return typeof value === 'string' ? value : 'No readable message';
}
function fail(message: string): never {
  throw new Error(message);
}
console.log(readMessage('Validated'));
if (Math.random() < 0) fail('unreachable');
export {};
