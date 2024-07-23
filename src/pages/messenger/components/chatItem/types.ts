import { Chat } from '../../../../types';

export type ChatItemProps = {
  chat: Chat;
  events?: {
    click: () => void;
  };
  onClick?: (chatId: number) => void;
}
