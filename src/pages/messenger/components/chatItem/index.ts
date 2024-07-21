import Block from '../../../../tools/block';
import { ChatItemProps } from './types';
import { tmp } from './chatItem.tmp';

export class ChatItem extends Block {
  constructor(props: ChatItemProps) {
    super({
      ...props,
      chat: {
        ...props.chat,
        last_message: {
          ...props.chat.last_message,
          time: props.chat.last_message?.time ? (props.chat.last_message?.time) : '',
        },
      },
      events: {
        click: () => {
          this.props.onClick(this.props.chat.id);
        },
      },
    });
  }

  render() {
    return this.compile(tmp);
  }
}
