import Block from '../../../../tools/block';
import { LoginForm } from '../../../../blocks/loginForm';
import { inputBlock } from '../../../../blocks/inputBlock';
import { Link } from '../../../../components/link';
import { Button } from '../../../../components/button';
import { tmp } from './login.tmp';
import { Routes } from '../../../../types';
import { AuthController } from '../../../../controllers/AuthController';

export class Login extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.loginForm = new LoginForm({
      inputs: [
        new inputBlock({
          id: 'login',
          name: 'login',
          type: 'text',
          label: 'Логин:',
        }),
        new inputBlock({
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
        to: Routes.Register,
        text: 'Зарегистрироваться',
      }),
    });
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
