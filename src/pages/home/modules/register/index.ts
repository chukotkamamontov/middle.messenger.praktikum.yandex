import { tmp } from './register.tmp';
import Block from '../../../../tools/block';
import { Link } from '../../../../components/link';
import { Button } from '../../../../components/button';
import { InputBlock } from '../../../../blocks/inputBlock';
import { InputBlockProps, Routes } from '../../../../types';
import { RegistrationForm } from '../../../../blocks/registrationForm';
import { fields } from './register.fields';
// import { Routes } from '../../../../types/types.ts';

export class Register extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.registrationForm = new RegistrationForm({
      inputs: fields.map((field) => new InputBlock(field as InputBlockProps)),
      submitButton: new Button({
        type: 'submit',
        text: 'Зарегистрироваться',
      }),
      link: new Link({
        to: Routes.Login,
        text: 'Уже зарегистрированы?',
      }),
    });
  }

  render() {
    return this.compile(tmp);
  }
}
