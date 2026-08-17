import './style.css';

import {
  addTransaction,
  filterTransactions,
  removeTransaction,
  summarize,
} from './state.js';
import { loadTransactions, saveTransactions } from './storage.js';
import type { Transaction, TransactionFilter } from './types.js';
import { parseTransactionInput, parseTransactions } from './validation.js';

function required<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`Missing required element: ${selector}`);
  return element;
}

const form = required<HTMLFormElement>('#transaction-form');
const errorMessage = required<HTMLParagraphElement>('#form-error');
const list = required<HTMLTableSectionElement>('#transaction-list');
const emptyState = required<HTMLParagraphElement>('#empty-state');
const filter = required<HTMLSelectElement>('#filter');
const importInput = required<HTMLInputElement>('#import-input');
const exportButton = required<HTMLButtonElement>('#export-button');
const currency = new Intl.NumberFormat('en-BD', { style: 'currency', currency: 'BDT' });

let transactions = loadTransactions();
let activeFilter: TransactionFilter = 'all';

function render(): void {
  const visible = filterTransactions(transactions, activeFilter);
  const summary = summarize(transactions);
  list.replaceChildren(...visible.map(transactionRow));
  emptyState.hidden = visible.length > 0;
  required('#balance').textContent = currency.format(summary.balance);
  required('#income').textContent = currency.format(summary.income);
  required('#expenses').textContent = currency.format(summary.expenses);
  required('#record-count').textContent =
    `${visible.length} ${visible.length === 1 ? 'record' : 'records'}`;
}

function transactionRow(transaction: Transaction): HTMLTableRowElement {
  const row = document.createElement('tr');
  const description = document.createElement('td');
  description.textContent = transaction.description;
  const category = document.createElement('td');
  category.textContent = transaction.category;
  const date = document.createElement('td');
  date.textContent = transaction.date;
  const amount = document.createElement('td');
  amount.className = `number ${transaction.kind}`;
  amount.textContent = `${transaction.kind === 'expense' ? '-' : '+'}${currency.format(transaction.amount)}`;
  const action = document.createElement('td');
  const remove = document.createElement('button');
  remove.type = 'button';
  remove.className = 'icon-button';
  remove.title = 'Delete transaction';
  remove.setAttribute('aria-label', `Delete ${transaction.description}`);
  remove.textContent = '×';
  remove.addEventListener('click', () => {
    transactions = removeTransaction(transactions, transaction.id);
    persistAndRender();
  });
  action.append(remove);
  row.append(description, category, date, amount, action);
  return row;
}

function persistAndRender(): void {
  saveTransactions(transactions);
  render();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  errorMessage.textContent = '';
  try {
    transactions = addTransaction(
      transactions,
      parseTransactionInput(new FormData(form)),
    );
    form.reset();
    required<HTMLInputElement>('#date').valueAsDate = new Date();
    persistAndRender();
  } catch (error) {
    errorMessage.textContent =
      error instanceof Error ? error.message : 'Could not add transaction.';
  }
});

filter.addEventListener('change', () => {
  activeFilter = filter.value as TransactionFilter;
  render();
});

exportButton.addEventListener('click', () => {
  const url = URL.createObjectURL(
    new Blob([JSON.stringify(transactions, null, 2)], { type: 'application/json' }),
  );
  const link = document.createElement('a');
  link.href = url;
  link.download = 'ledger-transactions.json';
  link.click();
  URL.revokeObjectURL(url);
});

importInput.addEventListener('change', async () => {
  const file = importInput.files?.[0];
  if (!file) return;
  try {
    transactions = parseTransactions(JSON.parse(await file.text()) as unknown);
    persistAndRender();
  } catch (error) {
    errorMessage.textContent =
      error instanceof Error ? error.message : 'Could not import file.';
  } finally {
    importInput.value = '';
  }
});

required<HTMLInputElement>('#date').valueAsDate = new Date();
render();
