import EventBus from './eventBus';
import { State } from '../types';
import { set } from './set';

export enum StoreEvents {
  Updated = 'Updated',
}

class Store extends EventBus {
  private state: State = {};
  
  getState(): State {
    return this.state;
  }

  set(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated, this.state);
  }
}

export default new Store();
