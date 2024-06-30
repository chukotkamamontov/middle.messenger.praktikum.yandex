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
  EMAIL = 'email',
  PHONE = 'phone',
  PASSWORD = 'password',
  MESSAGE = 'message',
}

const validateName = (value: string) => {
  const capitalRegExp = /^[A-ZА-ЯЁ].*$/;
  const excludedSymbolsRegExp = /^[^-!@#$%^&*()_+=;:,./?\\|`~[\]{}0-9\s]+$/;
  if (!capitalRegExp.test(value)) {
    return 'Value must start with the capital simbol';
  }
  if (!excludedSymbolsRegExp.test(value)) {
    return 'Value contains illegal symbol';
  }
  return '';
};

const validateLogin = (value: string) => {
  const loginRegExp = /^(?!-|_)(?!.*(?:-|_){2})[A-Za-z0-9_-]{3,20}$/;
  if (!loginRegExp.test(value)) {
    return 'Incorrect login. Try something easier';
  }
  return '';
};

const validateEmail = (value: string) => {
  const emailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  if (!emailRegExp.test(value)) {
    return 'Incorrect email. Try something easier';
  }
  return ''
};


const validatePhone = (value: string) => {
  const phoneRegExp = /^\+?\d{10,15}$/;
  if (!phoneRegExp.test(value)) {
    return 'Incorrect phone number';
  };
  return '';
};

const validatePassword = (value: string) => {
  const passwordRegExp = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
  if (!passwordRegExp.test(value)) {
    return 'Incorrect password value';
  }
  return '';
};

const validateMessage = (value: string) => {
  const messageRegExp = /^\s*$/;
  if (value.length === 0 || messageRegExp.test(value)) {
    return 'Message must has something';
  }
  return '';
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
      case NAMES.MESSAGE:
        errors[name] = validateMessage(value);
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
