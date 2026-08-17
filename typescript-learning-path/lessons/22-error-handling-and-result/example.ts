type Result<T> = { ok: true; value: T } | { ok: false; error: Error };
function divide(a: number, b: number): Result<number> {
  return b === 0 ? { ok: false, error: new Error('zero') } : { ok: true, value: a / b };
}
console.log(divide(8, 2));
export {};
