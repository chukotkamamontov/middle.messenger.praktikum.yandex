import Store, { State, StoreEvents } from '../tools/store';
import Block from '../tools/block';
import { isEqual } from '../utils/storeUtils';

export const withStore = (mapStateToProps: (state: State) => any) => (Component: Block) => {
  console.log('[Component]: ', Component)
  return class extends Component {
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
  }
}
