export interface IdGenerator {
  next(): string;
}
export class MemoryStore {
  constructor(private readonly ids: IdGenerator) {}
  create(): string {
    throw new Error('TODO');
  }
}
