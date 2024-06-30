import styles from './textarea.module.scss';
import { TextareaProps } from '../../types';
import Block from '../../tools/block';

export class Textarea extends Block {
  constructor(props: TextareaProps) {
    super('textarea', props);
  }

  init() {
    console.log('[textarea] [props]: ', this.props)
    const element = this.element as HTMLTextAreaElement;
    element.className = styles.input;
    if (this.props.isOutlined) {
      element.classList.add(styles.outlined);
    }
    element.name = this.props.name;
    if (this.props.placeholder) {
      element.placeholder = this.props.placeholder;
    }
    element.id = this.props.id;
  }

  render() {
    return this.compile('');
  }
}
