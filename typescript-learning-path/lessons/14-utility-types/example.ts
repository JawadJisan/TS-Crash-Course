type User = { id: string; name: string; email: string };
type UserUpdate = Partial<Omit<User, 'id'>>;
type UserLookup = Record<string, User>;
const update: UserUpdate = { name: 'New name' };
const lookup: UserLookup = {};
console.log(update, lookup);
export {};
