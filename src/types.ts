import Block from './tools/block';

export type NotFoundPageProps = {
  message: string;
  statusCode: string;
}

export type ErrorPageProps = {
  message: string;
  statusCode: string;
}

export type LinkProps = {
  className?: string;
  text: string;
  to: string;
}

export interface InputProps {
  type: 'text' | 'password' | 'tel' | 'email' | 'file';
  id: string;
  isOutlined?: boolean;
  name: string;
  placeholder?: string;
  events?: {
    blur?: (event: FocusEvent) => void;
  };
}

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
