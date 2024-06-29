export type ButtonProps = {
  type: 'button' | 'submit';
  text: string;
  events?: {
    click: () => void;
  };
}
