import { Form } from '../../../../blocks/form';
import { InputBlock } from '../../../../blocks/inputBlock.ts';
import { Button } from '../../../../components/button';
import Block from '../../../../tools/block';
import { MessageProps } from '../../../../types';
import { tmp } from './message.tmp';

export class Message extends Block {
  constructor(props: MessageProps) {
    super('div', props);
  }

  init() {
    this.children.form = new Form({
      submitButton: new Button({
        type: 'submit',
        text: 'Отправить',
      }),
      inputs: [
        new InputBlock({
          id: 'message',
          name: 'message',
          type: 'text',
          label: 'Message:',
        }),
      ],
    });
  }

  render() {
    return this.compile(tmp);
  }
}
