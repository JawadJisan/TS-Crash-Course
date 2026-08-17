type Flags<T> = { [K in keyof T]: boolean };
type Options = { cache: boolean; retries: number };
const enabled: Flags<Options> = { cache: true, retries: false };
console.log(enabled);
export {};
