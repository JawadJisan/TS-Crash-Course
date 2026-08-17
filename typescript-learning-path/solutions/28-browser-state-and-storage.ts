export type Note = { id: string; text: string };
export function encodeNotes(notes: readonly Note[]): string {
  return JSON.stringify(notes);
}
