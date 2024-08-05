import EventBus from './eventBus';

export enum wsEvents {
  Close = 'close',
  Connect = 'connected',
  Error = 'error',
  Message = 'message',
  Open = 'open',
}

export class Ws extends EventBus {
  private socket: WebSocket | null = null;

  private interval: number = 0;

  private readonly url: string;

  constructor(url: string) {
    super();
    this.url = url;
  }

  public connect() {
    this.socket = new WebSocket(this.url);
    this.addEventListeners(this.socket);
    this.setPing();
    return new Promise<void>((resolve) => {
      this.on(wsEvents.Connect, () => resolve());
    });
  }

  private setPing() {
    this.interval = window.setInterval(() => {
      this.send({ type: 'ping' });
    }, 5000);

    this.on(wsEvents.Close, () => {
      clearInterval(this.interval);

      this.interval = 0;
    });
  }

  public send(data: unknown) {
    if (!this.socket) {
      throw new Error('Cоединение не установлено');
    }
    this.socket.send(JSON.stringify(data));
  }

  private addEventListeners(socket: WebSocket) {
    socket.addEventListener(wsEvents.Open, () => {
      this.emit(wsEvents.Connect);
    });

    socket.addEventListener(wsEvents.Close, (event: CloseEvent) => {
      if (event.wasClean) {
        console.log('Соединение закрыто', event.reason);
      } else {
        console.log('Обрыв соединения');
      }
      this.emit(wsEvents.Close);
    });

    socket.addEventListener(wsEvents.Message, (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'pong') {
          return;
        }
        this.emit(wsEvents.Message, data);
      } catch (error) {
        console.log(error);
      }
    });

    socket.addEventListener(wsEvents.Error, (event: Event) => {
      console.log('Ошибка', event);
      this.emit(wsEvents.Error, event);
    });
  }
}
