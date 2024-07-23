import Block from '../../../../tools/block';
import { tmp } from './createChatForm.tmp';
import { validateFormSubmit } from '../../../../utils/formUtils';
import { CreateChatFormProps } from './types';
import { ChatsController } from '../../../../controllers/ChatsController';

export class CreateChatForm extends Block {
  constructor(props: CreateChatFormProps) {
    super({
      ...props,
      events: {
        submit: (event: Event) => {
          event.preventDefault();
          const data = validateFormSubmit(event.target as HTMLFormElement, this.children.inputs as Block[]);

          if (data) {
            const title = data['new-chat'];
            ChatsController.create(title);
            this.props.onSubmit();
          }
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
