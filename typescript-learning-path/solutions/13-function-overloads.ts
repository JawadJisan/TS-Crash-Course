export function wrap(value: string): string[];
export function wrap(value: number): number[];
export function wrap(value: string | number): string[] | number[] {
  return typeof value === 'string' ? [value] : [value];
}
