import Block from '../../tools/Block';
import { tmp } from './signup.tmp';
import { Form } from '../../blocks/form';
import { Link } from '../../components/link';
import { InputBlock } from '../../blocks/inputBlock.ts';
import { Button } from '../../components/button';
import { InputProps } from '../../types';


const inputs: InputProps[] = [
  {
    type: 'text',
    id: 'first_name',
    outlined: true,
    name: 'first_name',
    label: 'First name',
  },
  {
    type: 'text',
    name: 'second_name',
    id: 'second_name',
    label: 'Second name',
    outlined: true,
  },
  {
    type: 'text',
    name: 'login',
    id: 'login',
    label: 'Login',
    outlined: true,
  },
  {
    type: 'text',
    name: 'email',
    id: 'email',
    label: 'Email',
    outlined: true,
  },
  {
    type: 'text',
    name: 'phone',
    id: 'phone',
    label: 'Phone',
    outlined: true,
  },
  {
    type: 'text',
    name: 'password',
    id: 'password',
    label: 'Password',
    outlined: true,
  },
  
];

export class SignUp extends Block {
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
          name: 'password',
          id: 'password',
          label: 'Password',
          outlined: true,
        }),
      ],
      submitButton: new Button({
        type: 'submit',
        text: 'Зарегистрироваться',
      }),
      link: new Link({
        to: '/signin',
        text: 'Уже зарегистрирован',
      }),
    });
  }

  render() {
    return this.compile(tmp);
  }
}
