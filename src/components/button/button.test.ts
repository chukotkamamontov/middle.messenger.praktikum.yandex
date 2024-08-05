import { expect } from 'chai';
import sinon from 'sinon';
import { Button } from './index';

describe('Button component', () => {
  it('should be clickable', () => {
    const callback = sinon.stub();
    const button = new Button({
      text: 'button',
      type: 'button',
      events: {
        click: callback,
      },
    });

    const element = button.element as HTMLButtonElement;

    element.click();

    expect(callback.calledOnce).to.eq(true);
  });

  it('should have text and type passed as an argument', () => {
    const button = new Button({
      text: 'button',
      type: 'submit',
    });

    const element = button.element as HTMLButtonElement;
    expect(element.textContent).to.eq('button');
    expect(element.type).to.eq('submit');
  });
});
