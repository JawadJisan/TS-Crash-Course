type Status = 'draft' | 'published' | 'archived';
function label(status: Status): string {
  return status.toUpperCase();
}
console.log(label('published'));
export {};
