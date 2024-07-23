import Block from '../../../../tools/block';

export type ManageUserFormProps = {
  inputs: Block[];
  onClose: () => void;
  onSubmit?: (chatId: number, userId: number[]) => void;
  submitButton: Block;
}
