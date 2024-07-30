import { tmp } from './messagesArea.tmp';
import Block from '../../../../tools/block';
import { MessagesAreaProps } from './types';
import { MessageItem } from '../messageItem';
import { MessageData, State } from '../../../../types';
import { withStore } from '../../../../tools/withStore';

export class BaseMessagesArea extends Block {
  constructor(props: MessagesAreaProps) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.messages) {
      this.children.messages = this.props.messages
        .map((message: MessageData) => ({
          ...message,
          sent: message.user_id === this.props.userId,
          time: message.time,
        }))
        .map((message: MessageData) => new MessageItem({ message }));
    }
    return true;
  }

  render() {
    return this.compile(tmp);
  }
}

const mapStateToProps = (state: State) => ({
  messages: state.currentMessages,
  userId: state.user?.id,
});

export const MessagesArea = withStore(mapStateToProps)(BaseMessagesArea);
