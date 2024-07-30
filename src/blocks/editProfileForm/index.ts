import Block from '../../tools/block';
import { validateFormSubmit } from '../../utils/formUtils';
import { EditProfileFormProps } from './types';
import { tmp } from './editProfileForm.tmp';
import { UserController } from '../../controllers/UserController';
import { ProfileData } from '../../types';

export class EditProfileForm extends Block {
  constructor(props: EditProfileFormProps) {
    super({
      ...props,
      events: {
        submit: (event: Event) => {
          console.log('[EditProfileForm]: ', event);
          event.preventDefault();
          const data = validateFormSubmit(event.target as HTMLFormElement, this.children.inputs as Block[]);
          if (data) {
            UserController.changeProfile(data as unknown as ProfileData);
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
