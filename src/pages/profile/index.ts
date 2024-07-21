import { Link } from '../../components/link';
import { Avatar } from '../../components/avatar';
import { Button } from '../../components/button';
import Block from '../../tools/block';
import { tmp } from './profile.tmp';
import { AuthController } from '../../controllers/AuthController';
import { withStore } from '../../hoc/withStore';
import { State } from '../../tools/store';
import { Routes } from '../../types';
import { ProfileProps } from './types';

export class BaseProfile extends Block {
  constructor(props: ProfileProps) {
    super(props);
  }

  init() {
    this.children.avatar = new Avatar({
      size: '130',
    });
    this.children.links = [
      new Link({
        to: Routes.Settings,
        text: 'Изменить профайл',
      }),
      new Link({
        to: Routes.Messenger,
        text: 'Перейти в мессенджер',
      }),
    ];
    this.children.logoutButton = new Button({
      type: 'button',
      text: 'Выйти',
      events: {
        click: () => AuthController.logout(),
      },
    });
  }

  render() {
    return this.compile(tmp);
  }
}

const mapStateToProps = (state: State) => ({ ...state.user });

export const Profile = withStore(mapStateToProps)(BaseProfile);
