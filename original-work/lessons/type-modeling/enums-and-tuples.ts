// enum and Tuple are TS specific features

type Point = [number, number]; // Tuple

// Tuple = Fix length Array

const location1: Point = [12, 34];

const dhakaLocation: Point = [23.733, 90.4];

console.log(dhakaLocation);
console.log(dhakaLocation[0]);

type Player = [string, string];

const players: Player[] = [
  ["CR7", "Portugal"],
  ["LM10", "Argentina"],
];

//
type OrderItem = [number, number];

const item: OrderItem = [7, 16];

console.log(item);
item.push(20);
console.log(item); // we can push unnecessary items. we can prevent this by making Tuple readonly

type NewItem = readonly [number, number];

const newItem: NewItem = [20, 40];

console.log(newItem);

newItem.push(44);

console.log(newItem);
