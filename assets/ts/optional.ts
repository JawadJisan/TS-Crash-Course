type OptionalId = {
  id?: number;
  name: string;
  email: string;
};

// rest of the code same

/* 
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
*/
