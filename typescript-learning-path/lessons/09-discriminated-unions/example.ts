type Result = { kind: 'success'; value: number } | { kind: 'error'; message: string };
function describe(result: Result): string {
  return result.kind === 'success' ? String(result.value) : result.message;
}
console.log(describe({ kind: 'success', value: 42 }));
export {};
