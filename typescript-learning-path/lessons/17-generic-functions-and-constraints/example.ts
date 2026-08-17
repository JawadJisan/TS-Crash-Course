function first<T>(items: readonly T[]): T | undefined {
  return items[0];
}
console.log(first(['a', 'b']), first([1, 2]));
export {};
