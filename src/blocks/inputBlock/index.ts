import Block from '../../tools/block';
import { Input } from '../../components/input';
import { Error } from '../../components/error';
import { InputBlockProps } from '../../types';
import { validate } from '../../utils/formUtils';
import { tmp } from './inputBlock.tmp';

export class inputBlock extends Block {
  constructor(props: InputBlockProps) {
    super(props);
  }

  init() {
    this.children.error = new Error({
      text: '',
    });
    this.children.input = new Input({
      ...this.props,
      events: {
        blur: (event) => {
          const target = event.target as HTMLInputElement;
          const errors = validate({
            [this.props.name]: target.value,
          });
          (this.children.error as Block).setProps({
            text: errors[this.props.name],
          });
        },
      },
    });
  }

  render() {
    return this.compile(tmp);
  }
}
