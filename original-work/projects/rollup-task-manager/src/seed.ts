type Filter = 'all' | 'active' | 'completed';

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

const taskForm = document.querySelector('#task-form') as HTMLFormElement | null;
const taskInput = document.querySelector('#task-input') as HTMLInputElement | null;
const taskList = document.querySelector('#task-list') as HTMLUListElement | null;
const emptyState = document.querySelector('#empty-state') as HTMLParagraphElement | null;
const stats = document.querySelector('#stats') as HTMLDivElement | null;
const filterButtons = document.querySelectorAll('.filter-btn') as NodeListOf<HTMLButtonElement>;

let tasks: Task[] = [
  { id: 1, text: 'Plan project work', completed: false },
  { id: 2, text: 'Review TypeScript notes', completed: true },
  { id: 3, text: 'Deploy app bundle', completed: false }
];

let activeFilter: Filter = 'all';

function getVisibleTasks(): Task[] {
  if (activeFilter === 'active') {
    return tasks.filter((task) => !task.completed);
  }

  if (activeFilter === 'completed') {
    return tasks.filter((task) => task.completed);
  }

  return tasks;
}

function renderTasks(): void {
  if (!taskList || !emptyState || !stats) return;

  const visibleTasks = getVisibleTasks();

  taskList.innerHTML = visibleTasks
    .map(
      (task) => `
        <li class="task-item ${task.completed ? 'completed' : ''}">
          <div class="task-main">
            <input type="checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}" />
            <span class="task-text">${task.text}</span>
          </div>
          <div class="task-actions">
            <button class="delete-btn" data-delete-id="${task.id}">Delete</button>
          </div>
        </li>
      `
    )
    .join('');

  const remainingTasks = tasks.filter((task) => !task.completed).length;
  stats.textContent = `${remainingTasks} task${remainingTasks === 1 ? '' : 's'} left`;
  emptyState.hidden = visibleTasks.length > 0;
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
  renderTasks();
}

function newDeleteTask(){
    console.log("will implement")
}

function toggleTask(id: number): void {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

function deleteTask(id: number): void {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
}

function updateFilter(filter: Filter): void {
  activeFilter = filter;

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === filter;
    button.classList.toggle('active', isActive);
  });

  renderTasks();
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

renderTasks();
