import Block from '../../tools/block';
import { tmp } from './settings.tmp';
import { fields } from './settings.fields';
import { Button } from '../../components/button';
import { Avatar } from '../../components/avatar';
import { AvatarInput } from '../../components/avatarInput';
import { InputBlock } from '../../blocks/inputBlock';
import { EditProfileForm } from '../../blocks/editProfileForm';
import { UserController } from '../../controllers/UserController';
import { UserInfo, InputBlockProps } from '../../types';
import Store from '../../tools/store';

export class Settings extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.avatar = new Avatar({
      size: '60',
    });

    this.children.avatarInput = new AvatarInput({
      avatar: new Avatar({
        size: '60',
      }),
      events: {
        change: (event: Event) => {
          const formData = new FormData();
          const target = event.target as HTMLInputElement;
          if (target.files && target.files.length !== 0) {
            const file = target.files[0];
            formData.append('avatar', file);
            UserController.changeAvatar(formData);
          }
        },
      },
    });
    const mappedData = fields.map((field) => {
      const entry = Object.entries(Store.getState().user as UserInfo).find((entry) => entry[0] === field.id);
      return {
        ...field,
        value: entry ? entry[1] : '',
      };
    });
    this.children.editProfileForm = new EditProfileForm({
      inputs: mappedData.map((field) => new InputBlock(field as InputBlockProps)),
      submitButton: new Button({
        type: 'submit',
        text: 'Сохранить',
      }),
    });
  }

  render() {
    return this.compile(tmp);
  }
}
