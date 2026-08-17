type Formatter = (value: number) => string;
function formatValues(values: readonly number[], format: Formatter): string[] {
  return values.map(format);
}
console.log(formatValues([10, 20], (value) => '$' + value.toFixed(2)));
export {};
