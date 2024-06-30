import Block from '../../tools/block';
import styles from './button.module.scss';
import { ButtonProps } from '../../types';

export class Button extends Block {
  constructor(props: ButtonProps) {
    super('button', props);
  }

  init() {
    const element = this.element as HTMLButtonElement;
    element.className = styles.button;
    element.type = this.props.type;
  }

  render() {
    return this.compile('{{text}}');
  }
}
