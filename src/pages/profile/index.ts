import { Link } from '../../components/link';
import Block from '../../tools/Block';
import { tmp } from './profile.tmp';

const links = [
  {
    text: 'SignIn',
    to: '/signin',
  },
  {
    text: 'SignUp',
    to: '/signup',
  },
  {
    text: 'Settings',
    to: '/settings',
  },
  {
    text: 'Profile',
    to: '/profile',
  },
  {
    text: '404',
    to: '/404',
  },
  {
    text: '500',
    to: '/500',
  },
];

export class Profile extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.links = links.map((link) => new Link(link));
  }

  render() {
    return this.compile(tmp);
  }
}
