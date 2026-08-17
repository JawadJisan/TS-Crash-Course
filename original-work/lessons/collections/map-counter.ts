const orders22 = new Map<string, number>();

function addOrder(juice: string) {
  const quantity = (orders22.get(juice) ?? 0) + 1;

  orders22.set(juice, quantity);
}

addOrder("Lemon")
addOrder("Lemon")
addOrder("Apple")
addOrder("Mango")

console.log(orders22)
