import type { Transaction } from './types.js';
import { parseTransactions } from './validation.js';

const storageKey = 'ts-course-expense-tracker';

export function loadTransactions(): Transaction[] {
  const stored = localStorage.getItem(storageKey);
  if (!stored) return [];
  try {
    return parseTransactions(JSON.parse(stored) as unknown);
  } catch {
    localStorage.removeItem(storageKey);
    return [];
  }
}

export function saveTransactions(transactions: readonly Transaction[]): void {
  localStorage.setItem(storageKey, JSON.stringify(transactions));
}
