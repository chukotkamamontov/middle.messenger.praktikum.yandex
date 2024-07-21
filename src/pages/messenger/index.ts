import { tmp } from './messenger.tmp';
import Block from '../../tools/block';
import { withStore } from '../../hoc/withStore';
import { MessengerController } from '../../controllers/MessengerController';
import { MessagesController } from '../../controllers/MessagesController';
import { State } from '../../tools/store';
import { Chat, Routes } from '../../types';
import { Link } from '../../components/link';
import { Avatar } from '../../components/avatar';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { ChatItem } from './components/chatItem';

export class BaseMessenger extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.avatarLink = new Link({
      to: Routes.Profile,
      content: new Avatar({
        size: '48',
      }),
    });
    this.children.searchInput = new Input({
      placeholder: 'Поиск чата...',
      id: 'search',
      type: 'text',
      name: 'search',
    });
    this.children.createChatButton = new Button({
      text: 'Создать чат',
      type: 'button',
      events: {
        click: () => {
          this.setProps({
            isCreateChatPopupOpen: true,
          });
        },
      },
    });
  }

  componentDidUpdate() {
    if (this.props.chats) {
      this.children.chats = this.props.chats.map(
        (chat: Chat) => new ChatItem({
          chat,
          onClick: (chatId: number) => {
            MessengerController.selectChat(chatId);
            MessagesController.findMessages(chatId);
            this.setProps({ optionsVisible: false });
          },
        }),
      );
    }

    return true;
  }

  componentDidMount() {
    MessengerController.getChatsList();
  }

  render() {
    return this.compile(tmp);
  }
}

const mapStateToProps = (state: State) => ({
  chats: state.chats,
  selectedChat: state.selectedChat?.[0],
});

export const Messenger = withStore(mapStateToProps)(BaseMessenger);
