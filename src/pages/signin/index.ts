import Block from '../../tools/block';
import { tmp } from './signin.tmp';
import { Form } from '../../blocks/form';
import { InputBlock } from '../../blocks/inputBlock.ts';
import { Button } from '../../components/button';
import { Link } from '../../components/link';

export class SignIn extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.form = new Form({
      inputs: [
        new InputBlock({
          id: 'login',
          name: 'login',
          type: 'text',
          label: 'Логин:',
        }),
        new InputBlock({
          id: 'password',
          name: 'password',
          type: 'password',
          label: 'Пароль:',
        }),
      ],
      submitButton: new Button({
        type: 'submit',
        text: 'Войти',
      }),
      link: new Link({
        to: '/signup',
        text: 'Зарегистрироваться',
      }),
    });
  }

  render() {
    return this.compile(tmp);
  }
}
