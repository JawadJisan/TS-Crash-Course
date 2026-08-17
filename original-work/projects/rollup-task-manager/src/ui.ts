import { Filter, Task } from './types';

export function renderTaskList(tasks: Task[], filter: Filter): string {
  const visibleTasks = getVisibleTasks(tasks, filter);

  if (visibleTasks.length === 0) {
    return '';
  }

  return visibleTasks
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
}

export function getVisibleTasks(tasks: Task[], filter: Filter): Task[] {
  if (filter === 'active') {
    return tasks.filter((task) => !task.completed);
  }

  if (filter === 'completed') {
    return tasks.filter((task) => task.completed);
  }

  return tasks;
}

export function getTaskSummary(tasks: Task[]): string {
  const remainingTasks = tasks.filter((task) => !task.completed).length;
  return `${remainingTasks} task${remainingTasks === 1 ? '' : 's'} left`;
}
