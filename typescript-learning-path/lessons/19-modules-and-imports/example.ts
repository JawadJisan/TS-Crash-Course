export const course = { name: 'TypeScript', level: 'mid' };
export function courseLabel(): string {
  return course.name + ' (' + course.level + ')';
}
console.log(courseLabel());
