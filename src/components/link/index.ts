import Block from '../../tools/block';
import styles from './link.module.scss';
import { LinkProps } from '../../types';

export class Link extends Block {
  constructor(props: LinkProps) {
    super('a', props);
  }

  init() {
    const element = this.element as HTMLLinkElement;
    element.className = styles.link;
    if (this.props.className) {
      element.classList.add(this.props.className);
    }
    element!.href = this.props.to;
  }

  render() {
    return this.compile('{{text}}');
  }
}
