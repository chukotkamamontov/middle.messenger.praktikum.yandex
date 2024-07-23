import { Avatar, Chat, ChatMember } from '../types';
import { BaseAPI } from './BaseAPI';

export type Token = {
  token: string
}

class MessengerAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  createChat(title: string) {
    return this.http.post('/', {
      data: {
        title,
      },
    });
  }

  getChats(data: Record<string, number | string>) {
    return this.http.get<Chat[]>('/', { data });
  }

  addUsers(users: number[], chatId: number) {
    return this.http.put('/users', {
      data: {
        users,
        chatId,
      },
    });
  }

  deleteUsers(users: number[], chatId: number) {
    return this.http.delete('/users', {
      data: {
        users,
        chatId,
      },
    });
  }

  getChatUsers(chatId: number) {
    return this.http.get<ChatMember[]>(`/${chatId}/users`);
  }

  delete(chatId: number) {
    return this.http.delete('/', {
      data: {
        chatId,
      },
    });
  }

  changeChatAvatar(data: FormData) {
    return this.http.put<Avatar>('/avatar', { data });
  }

  getToken(chatId: number) {
    return this.http.post<Token>(`/token/${chatId}`);
  }
}

export default new MessengerAPI();
