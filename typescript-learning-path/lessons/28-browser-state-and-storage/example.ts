type Theme = 'light' | 'dark';
export function saveTheme(theme: Theme): void {
  localStorage.setItem('theme', theme);
}
export function loadTheme(): Theme {
  return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
}
console.log(loadTheme());
