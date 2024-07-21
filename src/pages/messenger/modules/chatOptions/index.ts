import { ChatOptionsProps } from './types';
import Block from '../../../../tools/block';
import { tmp } from './chatOptions.tmp';

export class ChatOptions extends Block {
  constructor(props: ChatOptionsProps) {
    super(props);
  }

  init() {
    this.children.buttons = this.props.buttons;
  }

  render() {
    return this.compile(tmp);
  }
}
