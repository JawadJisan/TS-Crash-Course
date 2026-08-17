export type ElementType<T> = T extends readonly (infer Item)[] ? Item : T;
export type Optional<T> = { [K in keyof T]?: T[K] };
