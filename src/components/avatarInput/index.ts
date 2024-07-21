import Block from '../../tools/block';
import { tmp } from './avatarInput.tmp';
import { AvatarInputProps } from './types';

export class AvatarInput extends Block {
  constructor(props: AvatarInputProps) {
    super(props);
  }

  render() {
    return this.compile(tmp);
  }
}
