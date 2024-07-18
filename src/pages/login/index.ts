import { Link } from '../../components/link';
import Block from '../../tools/block';
import { tmp } from './home.tmp';
import { links } from './home.links';

export class Login extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.links = links.map((link) => new Link(link));
  }

  render() {
    return this.compile(tmp);
  }
}
