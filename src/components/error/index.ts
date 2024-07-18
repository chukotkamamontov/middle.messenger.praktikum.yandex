import styles from './error.module.scss';
import Block from '../../tools/block';
import { ErrorProps } from './types';

export class Error extends Block {
  constructor(props: ErrorProps) {
    super(props);
  }

  render() {
    return this.compile(`<span class=${styles.error}>{{text}}</span`);
  }
}
