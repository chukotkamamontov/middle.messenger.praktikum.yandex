import Block from '../../tools/block';
import { Link } from '../../components/link';
import { NotFoundPageProps } from '../../types';
import { tmpl } from './notFoundPage.tmp';

export class NotFoundPage extends Block {
  constructor(props: NotFoundPageProps) {
    super('main', props);
  }

  init() {
    this.children.mainPageLink = new Link({
      text: 'Вернуться домой',
      to: '/',
    });
  }

  render() {
    return this.compile(tmpl);
  }
}
