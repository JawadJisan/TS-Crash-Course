function parse(value: string): number;
function parse(value: number): string;
function parse(value: string | number): string | number {
  return typeof value === 'string' ? Number(value) : String(value);
}
console.log(parse('42'), parse(42));
export {};
