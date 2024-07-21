import Block from '../../../../tools/block';
import { tmp } from './createChatModal.tmp';
import { createChatModalProps } from './types';

export class createChatModal extends Block {
  constructor(props: createChatModalProps) {
    super(props);
  }

  render() {
    return this.compile(tmp);
  }
}
