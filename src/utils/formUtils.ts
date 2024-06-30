import Block from '../tools/block';

type ErrorsObject = {
  [key: string]: string;
}

type validateParams = {
  [key: string]: string;
}

enum NAMES {
  FIRST_NAME = 'first_name',
  SECOND_NAME = 'second_name',
  LOGIN = 'login',
  PASSWORD = 'password',
  MESSAGE = 'message',
  EMAIL = 'email',
  PHONE = 'phone',
}

const validateLogin = (value: string) => {
  console.log(value);
  return '';
};

const validateEmail = (value: string) => {
  if (value) return ''
  return ''
};

const validateName = (value: string) => {
  if (value) return ''
  return ''
};

const validatePhone = (value: string) => {
  if (value) return ''
  return ''
};

const validatePassword = (value: string) => {
  if (value) return ''
  return ''
};

export const validate = (input: validateParams) => {
  const errors: ErrorsObject = {};
  Object.entries(input).forEach(([name, value]) => {
    switch (name) {
      case NAMES.LOGIN:
        errors[name] = validateLogin(value);
        break;
      case NAMES.EMAIL:
        errors[name] = validateEmail(value);
        break;
      case NAMES.FIRST_NAME:
      case NAMES.SECOND_NAME:
        errors[name] = validateName(value);
        break;
      case NAMES.PASSWORD:
        errors[name] = validatePassword(value);
        break;
      case NAMES.PHONE:
        errors[name] = validatePhone(value);
        break;
      default:
        break;
    }
  });
  return errors;
};

export const validateFormSubmit = (form: HTMLFormElement, inputs: Block[], isMessage = false) => {
  console.log(inputs)
  console.log(isMessage)
  const formData = new FormData(form);
  const formFields: Record<string, string> = {};

  formData.forEach((value, name) => {
    if (typeof value === 'string') {
      formFields[name] = value;
    }
  });
  console.log(formFields);
};
