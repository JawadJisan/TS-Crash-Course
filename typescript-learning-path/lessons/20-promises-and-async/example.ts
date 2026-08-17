async function loadGreeting(): Promise<string> {
  await Promise.resolve();
  return 'Hello from async code';
}
loadGreeting().then(console.log);
export {};
