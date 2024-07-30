import Block from '../../tools/block';
import { tmp } from './registrationForm.tmp';
import { RegistrationFormProps } from '../../types';

export class RegistrationForm extends Block {
  constructor(props: RegistrationFormProps) {
    super({
      ...props,
      events: {
        submit: (event: Event) => {
          event.preventDefault();
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
