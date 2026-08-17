export const transactionKinds = ['income', 'expense'] as const;
export type TransactionKind = (typeof transactionKinds)[number];

export const categories = [
  'food',
  'housing',
  'transport',
  'utilities',
  'salary',
  'other',
] as const;
export type Category = (typeof categories)[number];

export interface Transaction {
  readonly id: string;
  description: string;
  amount: number;
  date: string;
  kind: TransactionKind;
  category: Category;
}

export type TransactionInput = Omit<Transaction, 'id'>;
export type TransactionFilter = TransactionKind | 'all';

export interface Summary {
  income: number;
  expenses: number;
  balance: number;
}
