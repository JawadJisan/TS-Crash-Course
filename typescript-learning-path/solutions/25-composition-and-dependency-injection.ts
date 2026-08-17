export interface IdGenerator {
  next(): string;
}
export class MemoryStore {
  constructor(private readonly ids: IdGenerator) {}
  create(): string {
    return this.ids.next();
  }
}
