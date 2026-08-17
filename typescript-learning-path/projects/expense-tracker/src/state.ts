import type {
  Summary,
  Transaction,
  TransactionFilter,
  TransactionInput,
} from './types.js';

export function addTransaction(
  transactions: readonly Transaction[],
  input: TransactionInput,
  id: string = crypto.randomUUID(),
): Transaction[] {
  return [...transactions, { id, ...input }];
}

export function removeTransaction(
  transactions: readonly Transaction[],
  id: string,
): Transaction[] {
  return transactions.filter((transaction) => transaction.id !== id);
}

export function filterTransactions(
  transactions: readonly Transaction[],
  filter: TransactionFilter,
): Transaction[] {
  const filtered =
    filter === 'all'
      ? transactions
      : transactions.filter((transaction) => transaction.kind === filter);
  return [...filtered].sort((a, b) => b.date.localeCompare(a.date));
}

export function summarize(transactions: readonly Transaction[]): Summary {
  const summary = transactions.reduce(
    (totals, transaction) => {
      totals[transaction.kind] += transaction.amount;
      return totals;
    },
    { income: 0, expense: 0 },
  );

  return {
    income: summary.income,
    expenses: summary.expense,
    balance: summary.income - summary.expense,
  };
}
