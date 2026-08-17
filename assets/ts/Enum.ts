// Enum is also a TS specific features

type TeeShirt = {
  size: number;
  color: string;
};

const TeeShirt1: TeeShirt = {
  size: 42,
  color: "Blue",
};
const TeeShirt2: TeeShirt = {
  size: 42,
  color: "Red",
};

enum TColors {
  Red = "red",
  Green = "green",
  Yellow = "yellow",
}

type NewTeeShirt = {
  size: number;
  color: string;
};

const TeeShirt3: NewTeeShirt = {
  size: 55,
  color: TColors.Red,
};

// ------------

enum Status {
  // if no value assign then
  draft, // 0
  private, // 1
  public, // 2
  common = "common",
}

type Article = {
  id: number;
  title: string;
  status: Status;
};

const article1: Article = {
  id: 1,
  title: "Exploring TypeScript Enum",
  status: Status.draft,
};
const article2: Article = {
  id: 1,
  title: "Exploring TypeScript Enum",
  status: Status.private,
};
const article3: Article = {
  id: 1,
  title: "Exploring TypeScript Enum",
  status: Status.common,
};

console.log(article1);
console.log(article2);
console.log(article3);
