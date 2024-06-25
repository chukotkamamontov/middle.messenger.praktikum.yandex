import Block from './block';

export const render = (query: string, block: Block): void => {
  const root = document.querySelector(query) as HTMLDivElement;

  if (root) {
    root.append(block.getContent()!);
  }
  
  block.dispatchComponentDidMount();
};
