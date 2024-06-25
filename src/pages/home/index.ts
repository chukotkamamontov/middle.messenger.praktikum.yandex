import { Link } from '../../components/link';
import Block from '../../tools/Block';
import { tmp } from './home.tmp';
import { LeftPanel } from './modules/leftPanel';
import { Lenta } from './modules/lenta';

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
    text: 'Profile',
    to: '/profile',
  },
  {
    text: 'Settings',
    to: '/settings',
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

export class HomePage extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.links = links.map((link) => new Link(link));
    this.children.leftPanel = new LeftPanel({
      data: 'LEFT PANEL WILL BE HERE',
    });
    this.children.lenta = new Lenta({
      data: 'LENTA WILL BE HERE',
    });
  }

  render() {
    return this.compile(tmp);
  }
}
