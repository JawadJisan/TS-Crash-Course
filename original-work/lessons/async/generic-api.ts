type User5 = {
  id: number;
  name: string;
  email: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  userId: number;
  total: number;
  date: string;
  status: "pending" | "shipped" | "delivered";
};

// /api/users, /api/products, /api/orders

// async function getUsers() {
//     const data = await fetch('/api/users')
//     return data.json()
// }

async function getUsers(): Promise<User5[]> {
  const data = await fetch("/api/users");
  return data.json();
}
async function getProducts(): Promise<Product[]> {
  const data = await fetch("/api/users");
  return data.json();
}

const newUser5 = await getUsers();

const products = await getProducts();

// do this using generic
async function get<T>(apiEndpoint: string): Promise<T> {
  const data = await fetch(apiEndpoint);

  return data.json();
}

const user99 =await get<User5[]>("/api/users")
const product99 =await get<Product[]>("/api/product")

