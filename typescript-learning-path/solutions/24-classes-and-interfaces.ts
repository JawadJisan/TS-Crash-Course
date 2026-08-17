export class Counter {
  private value = 0;
  increment(): number {
    return ++this.value;
  }
  current(): number {
    return this.value;
  }
}
