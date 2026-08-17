type UserNew = {
  id: number;
  name: string;
  email: string;
};

const users: UserNew[] = [];
const usersNew: UserNew[] = [];

let lastId: number = 0;

function addUser(name: string, email: string): UserNew {
  const user: UserNew = {
    id: ++lastId,
    name,
    email,
  };
  users.push(user);
  return user;
}

addUser("Alice", "test@alice.com");
console.log(users);

// do this using by TS build in function omit

function addUserNew(user: Omit<UserNew, "id">): UserNew {
  const newUser: UserNew = {
    id: ++lastId,
    ...user,
  };
  usersNew.push(newUser);
  return newUser;
}

addUserNew({ name: "Alice New", email: "test@alice-new.com" });
console.log(usersNew)

