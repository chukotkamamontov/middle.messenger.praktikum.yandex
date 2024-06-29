import { Form } from '../../../../blocks/form';
import { Button } from '../../../../components/button';
import { Textarea } from '../../../../components/textatea';
import Block from '../../../../tools/block';
import { MessageProps } from '../../../../types';
import { tmp } from './message.tmp'

export class Message extends Block {
  constructor(props: MessageProps) {
    super('div', props);
  }

  init() {
    this.children.textarea = new Textarea({
      name: 'message',
      id: 'message',
    })
    this.children.form = new Form({
      inputs: [
        new Textarea({
          name: 'message',
          id: 'message',
        })
      ],
      submitButton: new Button({
        type: 'submit',
        text: 'Отправить',
      }),
    });
  }

  render() {
    return this.compile(tmp);
  }
}
