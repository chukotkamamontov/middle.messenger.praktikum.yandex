import Store from '../tools/store';
import { wsEvents, Ws } from '../tools/ws';
import { MessageData } from '../types';
import { MessengerController } from './MessengerController';

export class MessagesController {
  private static transports: Map<number, Ws> = new Map();

  static async connect(chatId: number, token: string) {
    if (this.transports.has(chatId)) {
      return;
    }
    const userId = Store.getState().user?.id;

    const transport = new Ws(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);
    this.transports.set(chatId, transport);

    await transport.connect();
    this.subscribe(transport, chatId);
    this.fetchOldMessages(chatId);
  }

  static async sendMessage(chatId: number, message: string) {
    const transport = this.transports.get(chatId);
    if (!transport) {
      throw new Error(`Чат ${chatId} не подключён`);
    }

    if (message) {
      transport.send({
        type: 'message',
        content: message,
      });
    }
  }

  static fetchOldMessages(chatId: number) {
    const transport = this.transports.get(chatId);

    if (!transport) {
      throw new Error(`Чат ${chatId} не подключён`);
    }
    transport.send({
      type: 'get old',
      content: '0',
    });
  }

  static handleMessages(messages: MessageData[] | MessageData, chatId: number) {
    const incomingMessages = Array.isArray(messages) ? messages.reverse() : [messages];
    const currentMessages = Store.getState().messages?.[chatId] ?? [];
    const allMessages = [...currentMessages, ...incomingMessages].filter((message) => message.type === 'message');
    Store.set(`messages.${chatId}`, allMessages);
    if (!Array.isArray(messages)) {
      this.findMessages(chatId);
    }
    MessengerController.getChatsList();
  }

  static findMessages(chatId: number) {
    const messages = Store.getState().messages?.[chatId];
    Store.set('currentMessages', messages);
  }

  static subscribe(transport: Ws, chatId: number) {
    transport.on(wsEvents.Message, (data: MessageData[] | MessageData) => {
      this.handleMessages(data, chatId);
    });
  }
}
