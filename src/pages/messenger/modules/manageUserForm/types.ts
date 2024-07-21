import Block from '../../../../tools/block';

export interface ManageUserFormProps {
  inputs: Block[];
  onClose: () => void;
  onSubmit?: (chatId: number, userId: number[]) => void;
  submitButton: Block;
}
