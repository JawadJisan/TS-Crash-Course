const fruits: string[] = ["apple", "banana", "date"];

const numbers: number[] = [1, 2, 4, 5, 6];

// Generic use dynamically diffremts types of data
// using generic we get dynamically types. 

function getFirstItem<T>(items: T[]): T {
  return items[0];
}

const firstFruit = getFirstItem(fruits);
const firstNumber = getFirstItem(numbers);

console.log(firstFruit);
console.log(firstNumber);
