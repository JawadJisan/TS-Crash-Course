function requiredElement<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error('Missing ' + selector);
  return element;
}
console.log(requiredElement<HTMLHeadingElement>('h1').textContent);
export {};
