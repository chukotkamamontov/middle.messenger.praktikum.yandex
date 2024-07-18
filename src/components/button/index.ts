import styles from './button.module.scss';
import Block from '../../tools/block';

export interface ButtonProps {
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
