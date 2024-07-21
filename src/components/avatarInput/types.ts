import Block from '../../tools/block';

export interface AvatarInputProps {
  avatar: Block;
  events?: {
    change: (event: Event) => void;
  };
}
