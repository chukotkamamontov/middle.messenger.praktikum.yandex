import Block from '../../tools/block';
import { Link } from '../../components/link';
import { ErrorPageProps } from '../../types';
import { tmp } from './500.tmp';


export class Error extends Block {
  constructor(props: ErrorPageProps) {
    super('div', props);
  }

  init() {
    this.children.mainPageLink = new Link({
      text: 'Вернуться домой',
      to: '/',
    });
  }

  render() {
    return this.compile(tmp);
  }
}
