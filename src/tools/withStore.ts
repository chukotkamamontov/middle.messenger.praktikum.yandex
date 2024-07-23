import Store, { StoreEvents } from './store';
import { BlockConstructor } from './block';
import { isEqual } from '../utils/storeUtils';
import { State } from './store';

type MapState = Record<string, unknown>
type MapStateToProps = (state: State) => MapState

export const withStore = (mapStateToProps: MapStateToProps) => <T>(Component: BlockConstructor<T>) => {

  console.log('[Component]: ', Component);

  class BlockWithStore extends Component {
    state: MapState;
    constructor(props: T) {
      super({ ...props, ...mapStateToProps(Store.getState()) });
      this.state = mapStateToProps(Store.getState());
      Store.on(StoreEvents.Updated, () => {

        // console.log('[withStore] [this.props]', this.props);
        // console.log('[withStore] [this.state]', this.state);

        const propsFromState = mapStateToProps(Store.getState());

        if (!isEqual(this.state, propsFromState)) {
          this.setProps({ ...propsFromState });
        }

        // console.log('[withStore] [propsFromState]', propsFromState)
        this.state = propsFromState;
      });
    }
  };
  return BlockWithStore as BlockConstructor<T>;
};
