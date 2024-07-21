import Block from '../../tools/block';
import styles from './optionsButton.module.scss';
import { OptionsButtonProps } from './types';

export class OptionsButton extends Block {
  constructor(props: OptionsButtonProps) {
    super({
      ...props,
      events: {
        click: () => {
          this.props.onClick();
        },
      },
    });
  }

  render() {
    return this.compile(`<button class=${styles.button}></button>`);
  }
}
