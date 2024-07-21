import Block from '../../../../tools/block';
import { ChangeChatAvatarModalProps } from './types';
import { tmp } from './changeChatAvatarModal.tmp';

export class ChangeChatAvatarModal extends Block {
  constructor(props: ChangeChatAvatarModalProps) {
    super(props);
  }

  render() {
    return this.compile(tmp);
  }
}
