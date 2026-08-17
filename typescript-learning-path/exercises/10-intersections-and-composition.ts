type Named = { name: string };
type Contactable = { email: string };
export type Contact = Named & Contactable;
export function contactLabel(contact: Contact): string {
  throw new Error('TODO');
}
