import Block from '../../tools/block';

export type AvatarInputProps = {
  avatar: Block;
  events?: {
    change: (event: Event) => void;
  };
}
