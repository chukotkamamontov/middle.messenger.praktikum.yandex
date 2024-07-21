import Block from '../../../../tools/block';

export interface CreateChatFormProps {
  inputs: Block[];
  onSubmit?: () => void;
  submitButton: Block;
}
