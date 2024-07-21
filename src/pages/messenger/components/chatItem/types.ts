import { Chat } from '../../../../types';

export interface ChatItemProps {
  chat: Chat;
  events?: {
    click: () => void;
  };
  onClick?: (chatId: number) => void;
}
