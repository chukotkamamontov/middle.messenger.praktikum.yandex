import { tmp } from './messenger.tmp';
import Block from '../../tools/block';
import { withStore } from '../../tools/withStore';
import { MessengerController } from '../../controllers/MessengerController';
import { MessagesController } from '../../controllers/MessagesController';
import { State } from '../../tools/store';
import { Chat, Routes } from '../../types';
import { Link } from '../../components/link';
import { Avatar } from '../../components/avatar';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { ChatItem } from './components/chatItem';
import { MessagesArea } from './components/messagesArea';
import { MessageForm } from './modules/messageForm';
import { CreateChatModal } from './modules/createChatModal';
import { InputBlock } from '../../blocks/inputBlock';
import { CreateChatForm } from './modules/createChatForm';
import { CloseModalButton } from '../../components/closeModalButton';
import { OptionsButton } from '../../components/optionsButton';
import { ChatOptions } from './modules/chatOptions';
import { ManageUserForm } from './modules/manageUserForm';
import { AddUserModal } from './modules/addUserModal';
import { DeleteUserModal } from './modules/deleteUserModal';
import { ChangeChatAvatarModal } from './modules/changeChatAvatarModal';
import { ChangeAvatarForm } from './modules/changeAvatarForm';
import { FileInput } from '../../components/fileInput';

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
    this.children.messageForm = new MessageForm({
      inputs: [
        new Input({
          placeholder: 'Написать сообщение...',
          name: 'message',
          id: 'message',
          type: 'text',
        }),
        new Input({
          name: 'file',
          id: 'file',
          type: 'file',
        }),
      ],
    });
    this.children.messagesArea = new MessagesArea({});
    
    this.children.createChatModal = new CreateChatModal({
      form: new CreateChatForm({
        inputs: [
          new InputBlock({
            label: 'Название чата',
            name: 'new-chat',
            id: 'new-chat',
            type: 'text',
          }),
        ],
        submitButton: new Button({
          type: 'submit',
          text: 'Создать',
        }),
        onSubmit: () => {
          this.setProps({
            isCreateChatPopupOpen: false,
          });
        },
      }),
      button: new CloseModalButton({
        events: {
          click: () => {
            this.setProps({
              isCreateChatPopupOpen: false,
            });
          },
        },
      }),
    });

    this.children.optionsButton = new OptionsButton({
      onClick: () => this.setProps({ optionsVisible: !this.props.optionsVisible }),
    });

    this.children.options = new ChatOptions({
      buttons: [
        new Button({
          text: 'Добавить пользователя',
          type: 'button',
          events: {
            click: () => {
              this.setProps({
                isAddUserPopupOpen: true,
              });
            },
          },
        }),
        new Button({
          text: 'Удалить пользователя',
          type: 'button',
          events: {
            click: () => {
              this.setProps({
                isDeleteUserPopupOpen: true,
              });
            },
          },
        }),
        new Button({
          text: 'Удалить чат',
          type: 'button',
          events: {
            click: () => {
              MessengerController.deleteChat(this.props.selectedChat.id);
              this.setProps({
                optionsVisible: false,
              });
            },
          },
        }),
        new Button({
          text: 'Сменить фото чата',
          type: 'button',
          events: {
            click: () => {
              // ChatsController.deleteChat(this.props.selectedChat.id);
              this.setProps({
                isChatAvatarPopupOpen: true,
                optionsVisible: false,
              });
            },
          },
        }),
      ],
    });

    this.children.addUserModal = new AddUserModal({
      button: new CloseModalButton({
        events: {
          click: () => {
            this.setProps({
              isAddUserPopupOpen: false,
              optionsVisible: false,
            });
          },
        },
      }),
      form: new ManageUserForm({
        inputs: [
          new InputBlock({
            label: 'ID пользователя или пользователей',
            name: 'userId',
            id: 'userId',
            type: 'text',
          }),
        ],
        submitButton: new Button({
          type: 'submit',
          text: 'Добавить',
        }),
        onSubmit: (chatId: number, userId: number[]) => {
          MessengerController.addUserToChat(chatId, userId);
        },
        onClose: () => {
          this.setProps({
            isAddUserPopupOpen: false,
            optionsVisible: false,
          });
        },
      }),
    });

    this.children.deleteUserModal = new DeleteUserModal({
      button: new CloseModalButton({
        events: {
          click: () => {
            this.setProps({
              isDeleteUserPopupOpen: false,
              optionsVisible: false,
            });
          },
        },
      }),
      form: new ManageUserForm({
        inputs: [
          new InputBlock({
            label: 'ID пользователя или пользователей',
            name: 'userId',
            id: 'userId',
            type: 'text',
          }),
        ],
        submitButton: new Button({
          type: 'submit',
          text: 'Удалить',
        }),
        onSubmit: (chatId: number, userId: number[]) => {
          MessengerController.deleteUserFromChat(chatId, userId);
        },
        onClose: () => {
          this.setProps({
            isDeleteUserPopupOpen: false,
            optionsVisible: false,
          });
        },
      }),
    });

    this.children.changeChatAvatarPopup = new ChangeChatAvatarModal({
      button: new CloseModalButton({
        events: {
          click: () => {
            this.setProps({
              isChatAvatarPopupOpen: false,
              optionsVisible: false,
            });
          },
        },
      }),
      form: new ChangeAvatarForm({
        inputs: [
          new FileInput({
            onChange: (event: Event) => {
              const target = event.target as HTMLInputElement;
              if (target.files) {
                const file = target.files[0];
                const formData = new FormData();
                formData.append('chatId', this.props.selectedChat.id);
                formData.append('avatar', file);
                MessengerController.editChatAvatar(formData);
                this.setProps({
                  isChatAvatarPopupOpen: false,
                  optionsVisible: false,
                });
              }
            },
          }),
        ],
      }),
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
