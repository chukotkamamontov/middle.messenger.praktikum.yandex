import Block from '../../../../tools/block';
import { MessageProps } from '../../../../types';
import { tmp } from './message.tmp'

export class Message extends Block {
  constructor(props: MessageProps) {
    super('div', props);
  }

  render() {
    return this.compile(tmp);
  }
}
