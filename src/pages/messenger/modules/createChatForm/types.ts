import Block from '../../../../tools/block';

export type CreateChatFormProps = {
  inputs: Block[];
  onSubmit?: () => void;
  submitButton: Block;
}
