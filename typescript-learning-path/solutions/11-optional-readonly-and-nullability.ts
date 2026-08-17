export interface UserSettings {
  readonly userId: string;
  nickname?: string | null;
}
export function displayName(settings: UserSettings): string {
  return settings.nickname?.trim() || 'Anonymous';
}
