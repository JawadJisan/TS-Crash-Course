// Set for unique collection

const data100 = new Set<string>();

data100.add("Jawad");
data100.add("Jisan");
// data100.add(88) // getting compilation error

console.log(data100);

// Map for storing key value. we can say the type also

const players00 = new Map<string, number>();

players00.set("CR7", 7);
players00.set("LM10", 10);
// players00.set("LM10", "10"); // getting compilation error

console.log(players00);
