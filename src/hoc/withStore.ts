import store, { State, StoreEvents } from '../tools/store';
import Block from '../tools/block';
import { isEqual } from '../utils/storeUtils';

export const withStore = (mapStateToProps: (state: State) => any) => <P extends Record<string, unknown>>(Component: typeof Block<P>) => class extends Component {
  constructor(props: any) {
    let state = mapStateToProps(store.getState());
    super({ ...props, ...mapStateToProps(store.getState()) });
    store.on(StoreEvents.Updated, () => {
      const propsFromState = mapStateToProps(store.getState());
      if (!isEqual(state, propsFromState)) {
        this.setProps({ ...propsFromState });
      }
      state = propsFromState;
    });
  }
};
