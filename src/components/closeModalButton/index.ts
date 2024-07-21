import styles from './closeModalButton.module.scss';
import Block from '../../tools/block';
import { CloseModalButtonProps } from './types';

export class CloseModalButton extends Block {
  constructor(props: CloseModalButtonProps) {
    super(props);
  }

  render() {
    return this.compile(`<button type="button" class=${styles.button}>X</button>`);
  }
}
