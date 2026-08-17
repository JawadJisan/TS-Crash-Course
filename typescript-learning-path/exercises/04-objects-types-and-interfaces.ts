export interface Profile {
  readonly id: string;
  name: string;
  email?: string;
}
export function profileLabel(profile: Profile): string {
  throw new Error('TODO');
}
