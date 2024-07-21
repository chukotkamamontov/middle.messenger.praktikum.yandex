import Block from '../../../../tools/block';
import { tmp } from './addUserModal.tmp';
import { AddUserModalProps } from './types';

export class AddUserModal extends Block {
  constructor(props: AddUserModalProps) {
    super(props);
  }

  render() {
    return this.compile(tmp);
  }
}
