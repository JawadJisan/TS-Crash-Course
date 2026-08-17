type HttpResponse<T> = { status: number; body: T };
function ok<T>(body: T): HttpResponse<T> {
  return { status: 200, body };
}
console.log(ok({ message: 'ready' }));
export {};
