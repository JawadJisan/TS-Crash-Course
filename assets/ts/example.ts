function divide(a: number, b: number): number {
  if (b == 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}
console.log(divide(10, 5));

function NoReturn(a: number, b: number): void {
  console.log(a / b);
}
NoReturn(40,5)
NoReturn(40,5)
NoReturn(40,5)

console.log("50")
console.log("50")