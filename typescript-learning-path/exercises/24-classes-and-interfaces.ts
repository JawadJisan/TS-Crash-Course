export class Counter {
  private value = 0;
  increment(): number {
    throw new Error('TODO');
  }
  current(): number {
    return this.value;
  }
}
