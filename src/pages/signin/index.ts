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
    id: 'username',
    outlined: true,
    name: 'username',
    // helper: 'This field is required',
    label: 'Username',
    placeholder: 'Type your username...',
  },
  {
    type: 'text',
    name: 'password',
    id: 'password',
    // helper: 'This field is required',
    label: 'Password',
    outlined: true,
    placeholder: 'Type your password...',
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
    // console.log('[this.compile(tmp)]: ', this.compile(tmp))
    return this.compile(tmp);
  }
}
