export async function delay<T>(value: T, milliseconds: number): Promise<T> {
  await new Promise<void>((resolve) => setTimeout(resolve, milliseconds));
  return value;
}
