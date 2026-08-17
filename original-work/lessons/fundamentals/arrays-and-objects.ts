const names: string[] = [];

names.push("Jawad");
names.push("Jisan");
// names.push(true);

const rolls: number[] = [10, 20, 30];

const user: {
  id: number;
  name: string;
} = {
  id: 16,
  name: "jawad",
};

type User = {
  id: number;
  name: string;
};

const newUser: User = {
  id: 30,
  name: "Jisan",
};

interface Class {
  name: string;
  dept: string;
}

const newUserUseInterface: Class = { dept: "ECE", name: "Jawad Jisna" };

// we can user both type and interface
