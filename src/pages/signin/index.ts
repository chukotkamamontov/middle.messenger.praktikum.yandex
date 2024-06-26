import Block from '../../tools/Block';
import { tmp } from './signin.tmp';
import Input from '../../components/input'
import { Link } from '../../components/link';

export interface InputProps {
  type: 'text' | 'password' | 'tel' | 'email' | 'file';
  id: string;
  outlined?: boolean;
  name: string;
  placeholder?: string;
  events?: {
    blur?: (event: FocusEvent) => void;
  };
  label: string;
}


const inputs: InputProps[] = [
  {
    type: 'text',
    id: 'first_name',
    outlined: true,
    name: 'first_name',
    // helper: 'This field is required',
    label: 'First name',
  },
  {
    type: 'text',
    name: 'second_name',
    id: 'second_name',
    // helper: 'This field is required',
    label: 'Second name',
    outlined: true,
  },
  {
    type: 'text',
    name: 'login',
    id: 'login',
    // helper: 'This field is required',
    label: 'Login',
    outlined: true,
  },
  {
    type: 'text',
    name: 'email',
    id: 'email',
    // helper: 'This field is required',
    label: 'Email',
    outlined: true,
  },
  {
    type: 'text',
    name: 'phone',
    id: 'phone',
    // helper: 'This field is required',
    label: 'Phone',
    outlined: true,
  },
  {
    type: 'text',
    name: 'display_name',
    id: 'display_name',
    // helper: 'This field is required',
    label: 'Display name',
    outlined: true,
  },
  {
    type: 'file',
    name: 'avatar',
    id: 'avatar',
    // helper: 'This field is required',
    label: 'Avatar',
    outlined: true,
  },
  {
    type: 'text',
    name: 'oldPassword',
    id: 'oldPassword',
    // helper: 'This field is required',
    label: 'Old password',
    outlined: true,
  },
  {
    type: 'text',
    name: 'newPassword',
    id: 'newPassword',
    // helper: 'This field is required',
    label: 'New password',
    outlined: true,
  },
];

export class SignIn extends Block {
  constructor() {
    super('main', {});
  }


  init() {
    this.children.inputs = inputs.map((input) => {
      return new Input(input)
    });
    this.children.link = new Link({
      text: 'Вернуться домой',
      to: '/',
    },);
  }

  render() {
    console.log('[this.compile(tmp)]: ', this.compile(tmp))
    return this.compile(tmp);
  }
}
