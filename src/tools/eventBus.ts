export class EventBus {
  listeners: Record<string, Array<(...args: any[]) => void>>;

  constructor() {
    this.listeners = {};
  }
  // регистрирует новый обработчик для указанного события
  on<T extends unknown[]>(event: string, callback: (...args: T) => void): EventBus {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
    return this;
  }
  // удаляет указанный обработчик для указанного события
  off<T extends unknown[]>(event: string, callback: (...args: T) => void): EventBus {
    if (!this.listeners[event]) {
      return this;
    }
    this.listeners[event] = this.listeners[event].filter((cb) => cb !== callback);
    return this;
  }
  // вызывает все зарегистрированные обработчики для указанного события
  emit<T extends unknown[]>(event: string, ...args: T): EventBus {
    if (!this.listeners[event]) {
      throw new Error(`The event '${event}' does't exist`);
    }
    this.listeners[event].forEach((cb) => {
      cb(...args);
    });
    return this;
  }
}
