import {
  categories,
  transactionKinds,
  type Category,
  type Transaction,
  type TransactionInput,
  type TransactionKind,
} from './types.js';

function includes<T extends string>(values: readonly T[], value: unknown): value is T {
  return typeof value === 'string' && values.includes(value as T);
}

export function parseTransactionInput(form: FormData): TransactionInput {
  const description = String(form.get('description') ?? '').trim();
  const amount = Number(form.get('amount'));
  const date = String(form.get('date') ?? '');
  const kind = form.get('kind');
  const category = form.get('category');

  if (!description) throw new Error('Description is required.');
  if (!Number.isFinite(amount) || amount <= 0)
    throw new Error('Amount must be positive.');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error('Choose a valid date.');
  if (!includes(transactionKinds, kind))
    throw new Error('Choose a valid transaction kind.');
  if (!includes(categories, category)) throw new Error('Choose a valid category.');

  return { description, amount, date, kind, category };
}

export function parseTransactions(value: unknown): Transaction[] {
  if (!Array.isArray(value)) throw new Error('The imported file must contain an array.');
  return value.map((item, index) => parseTransaction(item, index));
}

function parseTransaction(value: unknown, index: number): Transaction {
  if (typeof value !== 'object' || value === null) {
    throw new Error(`Transaction ${index + 1} must be an object.`);
  }
  const item = value as Record<string, unknown>;
  if (typeof item.id !== 'string' || !item.id)
    throw new Error(`Transaction ${index + 1} has no id.`);
  if (typeof item.description !== 'string' || !item.description.trim())
    throw new Error(`Transaction ${index + 1} has no description.`);
  if (
    typeof item.amount !== 'number' ||
    !Number.isFinite(item.amount) ||
    item.amount <= 0
  )
    throw new Error(`Transaction ${index + 1} has an invalid amount.`);
  if (typeof item.date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(item.date))
    throw new Error(`Transaction ${index + 1} has an invalid date.`);
  if (!includes(transactionKinds, item.kind))
    throw new Error(`Transaction ${index + 1} has an invalid kind.`);
  if (!includes(categories, item.category))
    throw new Error(`Transaction ${index + 1} has an invalid category.`);

  return {
    id: item.id,
    description: item.description.trim(),
    amount: item.amount,
    date: item.date,
    kind: item.kind as TransactionKind,
    category: item.category as Category,
  };
}
