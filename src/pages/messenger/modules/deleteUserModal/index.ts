import Block from '../../../../tools/block';
import { tmp } from './deleteUserModal.tmp';
import { DeleteUserModalProps } from './types';

export class DeleteUserModal extends Block {
  constructor(props: DeleteUserModalProps) {
    super(props);
  }

  render() {
    return this.compile(tmp);
  }
}
