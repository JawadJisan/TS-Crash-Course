type Settings = { readonly id: string; theme?: 'light' | 'dark' };
const settings: Settings = { id: 'u1' };
console.log(settings.theme ?? 'system');
export {};
