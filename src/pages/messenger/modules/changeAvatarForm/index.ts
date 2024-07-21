import Block from '../../../../tools/block';
import { tmp } from './changeAvatarForm.tmp';
import { ChangeAvatarFormProps } from './types';

export class ChangeAvatarForm extends Block {
  constructor(props: ChangeAvatarFormProps) {
    super(props);
  }

  init() {
    this.children.inputs = this.props.inputs;
  }

  render() {
    return this.compile(tmp);
  }
}
