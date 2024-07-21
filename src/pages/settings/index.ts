import { Button } from '../../components/button';
import { Avatar } from '../../components/avatar';
import { AvatarInput } from '../../components/avatarInput';
import { inputBlock } from '../../blocks/inputBlock';
import { EditProfileForm } from '../../blocks/editProfileForm';
import Block from '../../tools/block';
import { InputBlockProps } from '../../types';
import { fields } from './settings.fields';
import { tmp } from './settings.tmp';
import { UserController } from '../../controllers/UserController';
import store from '../../tools/store';
import { UserInfo } from '../../types';

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
      const entry = Object.entries(store.getState().user as UserInfo).find((entry) => entry[0] === field.id);
      return {
        ...field,
        value: entry ? entry[1] : '',
      };
    });
    this.children.editProfileForm = new EditProfileForm({
      inputs: mappedData.map((field) => new inputBlock(field as InputBlockProps)),
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
