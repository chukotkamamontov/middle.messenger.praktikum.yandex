import { BlockConstructor } from './block';
import { Route } from './route';

class Router {
  private routes: Route[] = [];

  private static _instance: Router;

  private readonly _rootQuery: string = '';

  private _currentRoute: null | Route = null;

  private history = window.history;

  constructor(rootQuery: string) {
    if (Router._instance) {
      return Router._instance;
    }
    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router._instance = this;
  }

  public use<T>(pathname: string, block: BlockConstructor<T>) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = (event: PopStateEvent) => {
      const currentTarget = event.currentTarget as Window;
      this._onRoute(currentTarget.location.pathname);
    };
    this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string): Route {
    return this.routes.find((route) => route.match(pathname))!;
  }
}

export default new Router('#app');
