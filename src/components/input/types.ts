export interface InputProps {
  events?: {
    blur?: (event: FocusEvent) => void;
  };
  id: string;
  isOutlined?: boolean;
  name: string;
  placeholder?: string;
  type: 'text' | 'password' | 'tel' | 'email' | 'file';
}
