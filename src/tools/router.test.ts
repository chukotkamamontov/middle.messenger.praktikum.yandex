import { expect } from 'chai';
import sinon from 'sinon';
import { Router } from './router';
import { Route } from './route';

describe('Router', () => {
  let router: Router;

  beforeEach(() => {
    router = new Router('#app');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should initialize with an empty routes array', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(router).to.have.property('routes').that.is.an('array').that.is.empty;
  });

  it('should use() add routes', () => {
    const routeMock = sinon.createStubInstance(Route);
    router.use('/test', routeMock.constructor as any);
    // eslint-disable-next-line no-unused-expressions
    expect(router.getRoute('/test')).to.exist;
  });

  it('should call history.pushState and _onRoute on go()', () => {
    const pushStateStub = sinon.stub(window.history, 'pushState');
    const _onRouteStub = sinon.stub((router as any), '_onRoute');

    router.go('/new-path');
    // eslint-disable-next-line no-unused-expressions
    expect(pushStateStub.calledOnce).to.be.true;
    // eslint-disable-next-line no-unused-expressions
    expect(pushStateStub.calledWith({}, '', '/new-path')).to.be.true;
    // eslint-disable-next-line no-unused-expressions
    expect(_onRouteStub.calledOnce).to.be.true;
    // eslint-disable-next-line no-unused-expressions
    expect(_onRouteStub.calledWith('/new-path')).to.be.true;
  });

  it('should call history.back on back()', () => {
    const backStub = sinon.stub(window.history, 'back');
    router.back();
    // eslint-disable-next-line no-unused-expressions
    expect(backStub.calledOnce).to.be.true;
  });

  it('should call history.forward on forward()', () => {
    const forwardStub = sinon.stub(window.history, 'forward');
    router.forward();
    // eslint-disable-next-line no-unused-expressions
    expect(forwardStub.calledOnce).to.be.true;
  });
});
