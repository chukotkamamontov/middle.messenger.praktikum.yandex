import { AvatarProps } from './types';
import Block from '../../tools/block';
import { tmp } from './avatar.tmp';
import { withStore } from '../../hoc/withStore';
import { State } from '../../tools/store';

export class BaseAvatar extends Block {
  constructor(props: AvatarProps) {
    super(props);
  }

  render() {
    return this.compile(tmp);
  }
}

const mapStateToProps = (state: State) => ({
  avatar: state.user?.avatar || '',
});

export const Avatar = withStore(mapStateToProps)(BaseAvatar);

