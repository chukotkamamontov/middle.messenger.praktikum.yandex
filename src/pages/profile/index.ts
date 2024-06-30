import Block from '../../tools/block';
import { Link } from '../../components/link';
import { tmp } from './profile.tmp';

export class Profile extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.link = new Link({
      to: '/',
      text: 'Вернуться на главную страницу',
    });
  }

  render() {
    return this.compile(tmp);
  }
}
