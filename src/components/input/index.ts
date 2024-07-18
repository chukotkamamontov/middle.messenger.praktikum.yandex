import styles from './input.module.scss';
import { InputProps } from './types';
import Block from '../../tools/block';
import { tmp } from './input.tmp';

export class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  componentDidMount() {
    const element = this.element as HTMLInputElement;
    if (this.props.isOutlined) {
      element.classList.add(styles.outlined);
    }
    if (this.props.type === 'file') {
      element.classList.add(styles.type_file);
    }
    if (this.props.name === 'message') {
      element.classList.add(styles.type_message);
    }
    if (this.props.name === 'search') {
      element.classList.add(styles.type_search);
    }
  }

  render() {
    return this.compile(tmp);
  }
}
