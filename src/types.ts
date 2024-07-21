import Block from './tools/block';

// pages types

export type NotFoundPageProps = {
  message: string;
  statusCode: string;
}

export type ErrorPageProps = {
  message: string;
  statusCode: string;
}

// blocks types

export type LeftPanelProps = {
  className?: string;
  data: string;
}

export type LentaProps = {
  className?: string;
  data: string;
}

export type MessageProps = {
  className?: string;
  data: string;
}

export type FormProps = {
  className?: string;
  inputs?: Block[];
  link?: Block;
  submitButton: Block;
}

// components types

export type ButtonProps = {
  type: 'button' | 'submit';
  text: string;
  events?: {
    click: () => void;
  };
}

export type InputProps = {
  type: 'text' | 'password' | 'tel' | 'email' | 'file';
  id: string;
  outlined?: boolean;
  name: string;
  placeholder?: string;
  label?: string;
  events?: {
    blur?: (event: FocusEvent) => void;
  };
}

export type TextareaProps = {
  id: string;
  name: string;
  placeholder?: string;
  label?: string;
  events?: {
    blur?: (event: FocusEvent) => void;
  };
}

export type InputBlockProps = {
  className?: string;
  id: string;
  outlined?: boolean;
  label: string;
  name: string;
  type: 'text' | 'password' | 'tel' | 'email' | 'file';
}

export type TextareaBlockProps = {
  className?: string;
  id: string;
  outlined?: boolean;
  label?: string;
  name: string;
}

export type LinkProps = {
  className?: string;
  text: string;
  to: string;
}

export type ErrorProps = {
  text: string;
}
