const defaults = { retries: 3, theme: 'dark' as const };
type Defaults = typeof defaults;
type DefaultKey = keyof Defaults;
function read(key: DefaultKey): Defaults[DefaultKey] {
  return defaults[key];
}
console.log(read('theme'));
export {};
