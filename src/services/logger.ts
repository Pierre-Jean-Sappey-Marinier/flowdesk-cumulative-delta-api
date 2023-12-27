export default class Logger {
  log(...args: unknown[]): void {
    console.log(...args);
  }

  error(...args: unknown[]): void {
    console.error(...args);
  }
}
