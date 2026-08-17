export function calculateTotal(prices: readonly number[], discount = 0): number {
  const subtotal = prices.reduce((total, price) => total + price, 0);
  return subtotal * (1 - discount / 100);
}
