export interface Profile {
  readonly id: string;
  name: string;
  email?: string;
}
export function profileLabel(profile: Profile): string {
  return profile.email ? profile.name + ' <' + profile.email + '>' : profile.name;
}
