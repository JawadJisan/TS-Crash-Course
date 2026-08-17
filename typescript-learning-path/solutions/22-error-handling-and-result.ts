export type Result<T> = { ok: true; value: T } | { ok: false; error: Error };
export function safeJson(value: string): Result<unknown> {
  try {
    return { ok: true, value: JSON.parse(value) as unknown };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error : new Error('Invalid JSON'),
    };
  }
}
