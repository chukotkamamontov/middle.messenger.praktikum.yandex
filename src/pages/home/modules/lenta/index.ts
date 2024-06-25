import Block from '../../../../tools/block';
import { LentaProps } from '../../../../types';
import { Message } from '../messages';
import { tmp } from './lenta.tmp'

export class Lenta extends Block {
  constructor(props: LentaProps) {
    super('div', props);
  }

  init() {
    this.children.message = new Message({
      data: 'SMTH FORE THE MESSAGE BLOCK',
    });
  }

  render() {
    return this.compile(tmp);
  }
}
