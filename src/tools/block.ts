import { v4 as uuidv4 } from 'uuid';
import Handlebars from 'handlebars';
import { EventBus } from './eventBus';

class Block<P extends Record<string, any> = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  public id = uuidv4();

  protected props: P;

  public children: Record<string, Block | Block[]>;

  private eventBus: () => EventBus;

  private _element: HTMLElement | null = null;

  private readonly _meta: { props: P; tagName: string };

  constructor(tagName = 'div', propsWithChildren: P) {
    const eventBus = new EventBus();

    const { children, props } = this._getChildrenAndProps(propsWithChildren);

    this._meta = {
      tagName,
      props: props as P,
    };

    this.children = children;
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  _getChildrenAndProps(childrenAndProps: P): { children: Record<string, Block | Block[]>; props: P } {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block | Block[]> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key as string] = value;
      } else {
        props[key] = value;
      }
    });

    return {
      props: props as P,
      children,
    };
  }

  _addEvents() {
    const { events = {} } = this.props as P & { events: Record<string, () => void> };
    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents() {
    const { events = {} } = this.props as P & { events: Record<string, () => void> };
    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName]);
    });
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  private _init() {
    this._createResources();
    this.init();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {}

  _componentDidMount() {
    this.componentDidMount();
  }

  protected componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((c) => c.dispatchComponentDidMount());
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  private _componentDidUpdate() {
    if (this.componentDidUpdate()) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate() {
    return true;
  }

  setProps = (nextProps: P) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const fragment = this.render();
    this._removeEvents();
    this._element!.innerHTML = '';
    this._element!.append(fragment);
    this._addEvents();
  }

  protected compile(template: string) {
    // console.log('[template]: ', template)
    const contextAndStubs = { ...this.props } as Record<string, any>;
    
    // Создаем заглушки для всех children
    for (const [name, component] of Object.entries(this.children)) {
        contextAndStubs[name] = Array.isArray(component)
            ? component.map((comp) => `<div data-id="${comp.id}"></div>`)
            : `<div data-id="${(component as Block).id}"></div>`;
    }

    const html = Handlebars.compile(template)(contextAndStubs);
    const fragment = document.createElement('template');
    fragment.innerHTML = html;

    // Заменяем заглушки реальными элементами
    for (const component of Object.values(this.children)) {
        if (Array.isArray(component)) {
            component.forEach((comp) => this._replaceStubWithContent(fragment, comp));
        } else {
            this._replaceStubWithContent(fragment, component as Block);
        }
    }
    // console.log('[fragment.content]: ', fragment.content)
    return fragment.content;
  } 


  private _replaceStubWithContent(fragment: HTMLTemplateElement, component: Block) {
    const stub = fragment.content.querySelector(`[data-id="${component.id}"]`);
    if (!stub) {
        return;
    }
    const content = component.getContent();
    if (content) {
        content.append(...Array.from(stub.childNodes));
        stub.replaceWith(content);
    }
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: P) {
    const self = this;

    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        const oldTarget = { ...target };

        target[prop as keyof P] = value;

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  // show() {
  //   this.getContent()!.style.display = 'block';
  // }

  // hide() {
  //   this.getContent()!.style.display = 'none';
  // }
}

export default Block;
