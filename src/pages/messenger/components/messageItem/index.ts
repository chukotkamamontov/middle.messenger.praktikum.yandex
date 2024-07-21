import { tmp } from './messageItem.tmp';
import Block from '../../../../tools/block';
import { MessageItemProps } from './types';

export class MessageItem extends Block {
  constructor(props: MessageItemProps) {
    super(props);
  }

  render() {
    return this.compile(tmp);
  }
}
