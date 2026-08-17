interface Course {
  readonly id: string;
  title: string;
  published: boolean;
}
const course: Course = { id: 'ts-101', title: 'TypeScript', published: true };
console.log(course);
export {};
