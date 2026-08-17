type Input = string | number;
function normalize(value: Input): string {
  return typeof value === 'number' ? value.toFixed(2) : value.trim();
}
console.log(normalize(12.5));
export {};
