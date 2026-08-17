export type ElementType<T> = T extends readonly (infer Item)[] ? Item : T;
export type Optional<T> = unknown;
