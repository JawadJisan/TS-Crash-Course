type Division = [number, number];

// function divide(a: number, b: number): [number, number] {
function divide(a: number, b: number): Division {
  const quotient = Math.floor(a / b);
  const remainder = a % b;

  return [quotient, remainder];
}

const result: Division = divide(7, 2);

console.log(result);
