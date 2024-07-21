import messengerApi from '../api/MessengerAPI';
import store from '../tools/store';
import { Chat, ChatMember } from '../types';
import { MessagesController } from './MessagesController';

export class MessengerController {
  static async create(title: string) {
    try {
      await messengerApi.createChat(title);
      await this.getChatsList();
    } catch (error) {
      console.log(error, 'chat create error');
    }
  }

  static async getChatsList() {
    try {
      const chats = await messengerApi.getChats({ limit: 50 });
      chats.map(async (chat: Chat) => {
        const { token } = await this.getToken(chat.id);
        await MessagesController.connect(chat.id, token);
      });
      store.set('chats', chats);
    } catch (error) {
      console.log(error, 'get chats list error');
    }
  }

  static async addUserToChat(chatId: number, userId: number[]) {
    try {
      await messengerApi.addUsers(userId, chatId);
      await this.getChatsList();
    } catch (error) {
      console.log(error, 'add user to chat error');
    }
  }

  static async deleteUserFromChat(chatId: number, userId: number[]) {
    try {
      await messengerApi.deleteUsers(userId, chatId);
      await this.getChatsList();
    } catch (error) {
      console.log(error, 'delete user from chat error');
    }
  }

  static selectChat(chatId: number) {
    const target = store.getState().chats?.find((chat) => chat.id === chatId);
    store.set('selectedChat', [target]);
    this.fetchChatUsers(chatId);
  }

  static async fetchChatUsers(chatId: number) {
    try {
      const chatMembers: ChatMember[] = await messengerApi.getChatUsers(chatId);
      const nonAdminMembers = chatMembers.filter((user) => user.role !== 'admin');
      store.set('selectedChat', [
        {
          ...store.getState().selectedChat?.[0],
          members: nonAdminMembers,
        },
      ]);
    } catch (error) {
      console.log(error, 'get chat users error');
    }
  }

  static async deleteChat(chatId: number) {
    try {
      await messengerApi.delete(chatId);
      store.set('selectedChat', undefined);
      await this.getChatsList();
    } catch (error) {
      console.log(error, 'delete the chat error');
    }
  }

  static async editChatAvatar(data: FormData) {
    try {
      const response = await messengerApi.changeChatAvatar(data);
      const { avatar, id } = response;

      const { chats, selectedChat } = store.getState();
      const updatedChats = chats?.map((chat) => (chat.id !== id
        ? chat
        : {
          ...chat,
          avatar,
        }));

      if (updatedChats) {
        store.set('chats', updatedChats);
      }
      store.set('selectedChat', [
        {
          ...selectedChat?.[0],
          avatar,
        },
      ]);
    } catch (error) {
      console.log(error, 'edit chat avatar error');
    }
  }

  static async getToken(chatId: number) {
    return messengerApi.getToken(chatId);
  }
}
