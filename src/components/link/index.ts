import { LinkProps } from '../../types';
import Block from '../../tools/block';
import router from '../../tools/router';
import { tmp } from './link.tmp';

export class Link extends Block {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: (event: Event) => {
          event.preventDefault();
          router.go(this.props.to);
        },
      },
    });
  }

  render() {
    return this.compile(tmp);
  }
}
