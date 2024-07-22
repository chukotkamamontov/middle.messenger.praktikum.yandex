import Store, { State, StoreEvents } from '../tools/store';
import Block from '../tools/block';
import { isEqual } from '../utils/storeUtils';

export const withStore = (mapStateToProps: (state: State) => any) => <P extends Record<string, unknown>>(Component: typeof Block<P>) => class extends Component {
  constructor(props: any) {
    let state = mapStateToProps(Store.getState());
    super({ ...props, ...mapStateToProps(Store.getState()) });
    Store.on(StoreEvents.Updated, () => {
      const propsFromState = mapStateToProps(Store.getState());
      if (!isEqual(state, propsFromState)) {
        this.setProps({ ...propsFromState });
      }
      state = propsFromState;
    });
  }
};
