type Timestamped = { createdAt: Date };
type Identified = { id: string };
type RecordItem = Timestamped & Identified & { title: string };
const item: RecordItem = { id: '1', title: 'Learn', createdAt: new Date() };
console.log(item);
export {};
