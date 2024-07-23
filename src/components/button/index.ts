import styles from './button.module.scss';
import Block from '../../tools/block';

export type ButtonProps = {
  events?: {
    click: () => void;
  };
  text: string;
  type: 'button' | 'submit';
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return this.compile(`<button class=${styles.button} type="{{type}}">{{text}}</button>`);
  }
}
