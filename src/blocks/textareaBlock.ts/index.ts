import Block from '../../tools/block';
import { Textarea } from '../../components/textatea';
import { Error } from '../../components/error';
import { TextareaBlockProps } from '../../types';
import { validate } from '../../utils/formUtils';
import { tmp } from './textareaBlock.tmp';

export class TextareaBlock extends Block {
  constructor(props: TextareaBlockProps) {
    super('div', props);
  }

  init() {
    this.children.error = new Error({
      text: '',
    });
    this.children.textarea = new Textarea({
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

    const element = this.element as HTMLDivElement;
    element.dataset.name = this.props.name;
  }

  render() {
    return this.compile(tmp);
  }
}
