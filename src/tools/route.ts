import Block from './Block';
import { render } from './render';

export class Route {
  private _pathname: string;

  private readonly _blockClass: typeof Block;

  private _block: null | Block;

  private _props: {
    rootQuery: string;
  };

  constructor(pathname: string, view: typeof Block, props: { rootQuery: string }) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return pathname === this._pathname;
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass({});
      render(this._props.rootQuery, this._block as Block);
      return;
    }

    this._block.show(this._props.rootQuery, render);
  }
}
