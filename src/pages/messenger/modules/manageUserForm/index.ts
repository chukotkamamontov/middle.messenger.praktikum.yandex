import Block from '../../../../tools/block';
import { tmpl } from './manageUserForm.tmp';
import { validateFormSubmit } from '../../../../utils/formUtils';
import { ManageUserFormProps } from './types';
import Store from '../../../../tools/rootStore';

export class ManageUserForm extends Block {
  constructor(props: ManageUserFormProps) {
    super({
      ...props,
      events: {
        submit: (event: Event) => {
          event.preventDefault();
          const target = event.target as HTMLFormElement;
          const data = validateFormSubmit(target, this.children.inputs as Block[]);

          if (data) {
            const userId = data.userId.split(',').map((n) => +n);
            const chatId = Store.getState().selectedChat?.[0].id;
            if (chatId && userId) {
              this.props.onSubmit(chatId, userId);
              target.reset();
              this.setProps({
                success: true,
              });
              setTimeout(() => {
                this.props.onClose();
              }, 1000);
            }
          }
        },
      },
    });
  }

  init() {
    this.children.inputs = this.props.inputs;
  }

  render() {
    return this.compile(tmpl);
  }
}
