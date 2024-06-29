import Block from '../../tools/Block';
import { tmp } from './settings.tmp';
import { Form } from '../../blocks/form';
import { Link } from '../../components/link';
import { InputBlock } from '../../blocks/inputBlock.ts';
import { Button } from '../../components/button';

export class Settings extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.form = new Form({
      inputs: [
        new InputBlock({
          type: 'text',
          id: 'first_name',
          outlined: true,
          name: 'first_name',
          label: 'First name',
        }),
        new InputBlock({
          type: 'text',
          name: 'second_name',
          id: 'second_name',
          label: 'Second name',
          outlined: true,
        }),
        new InputBlock({
          type: 'text',
          name: 'login',
          id: 'login',
          label: 'Login',
          outlined: true,
        }),
        new InputBlock({
          type: 'text',
          name: 'email',
          id: 'email',
          label: 'Email',
          outlined: true,
        }),
        new InputBlock({
          type: 'text',
          name: 'phone',
          id: 'phone',
          label: 'Phone',
          outlined: true,
        }),
        new InputBlock({
          type: 'text',
          name: 'display_name',
          id: 'display_name',
          label: 'Display name',
          outlined: true,
        }),
        new InputBlock({
          type: 'file',
          name: 'avatar',
          id: 'avatar',
          label: 'Avatar',
          outlined: true,
        }),
        new InputBlock({
          type: 'text',
          name: 'oldPassword',
          id: 'oldPassword',
          label: 'Old password',
          outlined: true,
        }),
        new InputBlock({
          type: 'text',
          name: 'newPassword',
          id: 'newPassword',
          label: 'New password',
          outlined: true,
        }),
      ],
      submitButton: new Button({
        type: 'submit',
        text: 'Сохранить',
      }),
      link: new Link({
        to: '/',
        text: 'Вернуться на главную страницу',
      }),
    });
  }

  render() {
    return this.compile(tmp);
  }
}
