import Block from '../../../../tools/block';
import { tmp } from './messageForm.tmp';
import { MessageFormProps } from './types';
import { validateFormSubmit } from '../../../../utils/formUtils';
import { MessagesController } from '../../../../controllers/MessagesController';
import store from '../../../../tools/store';

export class MessageForm extends Block {
  constructor(props: MessageFormProps) {
    super({
      ...props,
      events: {
        submit: (event: any) => {
          event.preventDefault();
          const target = event.target as HTMLFormElement;
          const data = validateFormSubmit(target, this.children.input as Block[]);
          if (data) {
            const { message } = data;
            const chatId = store.getState().selectedChat?.[0].id;
            if (chatId) {
              MessagesController.sendMessage(chatId, message);
              target.reset();
            }
          }
        },
      },
    });
  }

  init() {
    this.children.inputs = this.props.inputs;
  }

  render() {
    return this.compile(tmp);
  }
}