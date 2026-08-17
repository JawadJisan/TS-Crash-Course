export function wrap(value: string): string[];
export function wrap(value: number): number[];
export function wrap(value: string | number): string[] | number[] {
  throw new Error('TODO');
}
