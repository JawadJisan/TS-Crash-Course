interface Printable {
  print(): string;
}
class Invoice implements Printable {
  constructor(
    public readonly id: string,
    private total: number,
  ) {}
  print(): string {
    return this.id + ': $' + this.total.toFixed(2);
  }
}
console.log(new Invoice('INV-1', 12).print());
export {};
