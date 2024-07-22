import Block from '../../tools/block';
import { tmp } from './loginForm.tmp';
import { validateFormSubmit } from '../../utils/formUtils';
import { LoginFormProps, SignInData } from '../../types';
import { AuthController } from '../../controllers/AuthController';

export class LoginForm extends Block {
  constructor(props: LoginFormProps) {
    super({
      ...props,
      events: {
        submit: (event: SubmitEvent) => {
          event.preventDefault();
          const data: any = validateFormSubmit(event.target as HTMLFormElement, this.children.inputs as Block[]);
          if (data) {
            AuthController.signin(data as unknown as SignInData);
          }
        },
      },
    });
  }

  init() {
    this.children.inputs = this.props.inputs;
  }

  render() {
    return this.compile(tmp);
  }
}
