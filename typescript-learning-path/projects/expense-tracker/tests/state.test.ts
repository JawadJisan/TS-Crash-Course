import { describe, expect, it } from 'vitest';

import {
  addTransaction,
  filterTransactions,
  removeTransaction,
  summarize,
} from '../src/state.js';

const expense = {
  description: 'Lunch',
  amount: 250,
  date: '2026-08-17',
  kind: 'expense' as const,
  category: 'food' as const,
};

describe('expense tracker state', () => {
  it('adds and removes immutable transactions', () => {
    const added = addTransaction([], expense, 'tx-1');
    expect(added[0]?.id).toBe('tx-1');
    expect(removeTransaction(added, 'tx-1')).toEqual([]);
  });

  it('summarizes and filters transactions', () => {
    const transactions = [
      { id: '1', ...expense },
      {
        id: '2',
        ...expense,
        amount: 1000,
        kind: 'income' as const,
        category: 'salary' as const,
      },
    ];
    expect(summarize(transactions)).toEqual({
      income: 1000,
      expenses: 250,
      balance: 750,
    });
    expect(filterTransactions(transactions, 'expense')).toHaveLength(1);
  });
});
