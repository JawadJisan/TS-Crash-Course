export type HttpResponse<T> = { status: number; body: T };
export function created<T>(body: T): HttpResponse<T> {
  throw new Error('TODO');
}
