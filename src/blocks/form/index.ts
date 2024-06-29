import Block from '../../tools/block';
import { tmp } from './form.tmp';
import { validateFormSubmit } from '../../utils/formUtils';
import { FormProps } from '../../types';

interface SubmitEvent extends Event {
  submitter: HTMLElement; 
}

export class Form extends Block {
  constructor(props: FormProps) {
    super('form', {
      ...props,
      events: {
        submit: (event: SubmitEvent) => {
          event.preventDefault();
          validateFormSubmit(event.target as HTMLFormElement, this.children.inputs as Block[]);
        },
      },
    });
  }

  init() {
    this.children.inputs = this.props.inputs;
  }

  render() {
    return this.compile(tmp);
  }
}
