import Block from '../../tools/block';
import { tmp } from './fileInput.tmp';
import { FileInputProps } from './types';

export class FileInput extends Block {
  constructor(props: FileInputProps) {
    super({
      ...props,
      events: {
        change: (event: Event) => {
          if (this.props.onChange) {
            this.props.onChange(event);
          }
        },
      },
    });
  }

  render() {
    return this.compile(tmp);
  }
}
