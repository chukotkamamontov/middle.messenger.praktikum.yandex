import Block from '../../../../tools/block';
import { tmp } from './leftPanel.tmp'
import { LeftPanelProps } from '../../../../types';

export class LeftPanel extends Block {
  constructor(props: LeftPanelProps) {
    super('div', props);
  }

  render() {
    return this.compile(tmp);
  }
}