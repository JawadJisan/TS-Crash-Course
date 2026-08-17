interface Clock {
  now(): Date;
}
class SystemClock implements Clock {
  now(): Date {
    return new Date();
  }
}
class Greeting {
  constructor(private readonly clock: Clock) {}
  message(): string {
    return this.clock.now().toISOString();
  }
}
console.log(new Greeting(new SystemClock()).message());
export {};
