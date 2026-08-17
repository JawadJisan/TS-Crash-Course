import { initialTasks } from './data';
import { Filter, Task } from './types';
import { getTaskSummary, getVisibleTasks, renderTaskList } from './ui';

const taskForm = document.querySelector('#task-form') as HTMLFormElement | null;
const taskInput = document.querySelector('#task-input') as HTMLInputElement | null;
const taskList = document.querySelector('#task-list') as HTMLUListElement | null;
const emptyState = document.querySelector('#empty-state') as HTMLParagraphElement | null;
const stats = document.querySelector('#stats') as HTMLDivElement | null;
const filterButtons = document.querySelectorAll('.filter-btn') as NodeListOf<HTMLButtonElement>;

let tasks: Task[] = [...initialTasks];
let activeFilter: Filter = 'all';

function render(): void {
  if (!taskList || !emptyState || !stats) return;

  const visibleTasks = getVisibleTasks(tasks, activeFilter);
  taskList.innerHTML = renderTaskList(tasks, activeFilter);
  emptyState.hidden = visibleTasks.length > 0;
  stats.textContent = getTaskSummary(tasks);
}

function addTask(text: string): void {
  const trimmed = text.trim();
  if (!trimmed || !taskInput) return;

  tasks.unshift({
    id: Date.now(),
    text: trimmed,
    completed: false
  });

  taskInput.value = '';
  taskInput.focus();
  render();
}

function toggleTask(id: number): void {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  render();
}

function deleteTask(id: number): void {
  tasks = tasks.filter((task) => task.id !== id);
  render();
}

function updateFilter(filter: Filter): void {
  activeFilter = filter;

  filterButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.filter === filter);
  });

  render();
}

if (taskForm && taskInput) {
  taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addTask(taskInput.value);
  });
}

taskList?.addEventListener('change', (event) => {
  const target = event.target as HTMLInputElement;
  if (target.matches('input[type="checkbox"]')) {
    const id = Number(target.dataset.id);
    toggleTask(id);
  }
});

taskList?.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;
  const deleteButton = target.closest('[data-delete-id]');

  if (deleteButton) {
    const id = Number(deleteButton.getAttribute('data-delete-id'));
    deleteTask(id);
  }
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter as Filter;
    updateFilter(filter);
  });
});

render();
