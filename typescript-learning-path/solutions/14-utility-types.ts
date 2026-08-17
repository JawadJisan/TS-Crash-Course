export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}
export type ProductCard = Pick<Product, 'id' | 'name' | 'price'>;
export type ProductPatch = Partial<Omit<Product, 'id'>>;
