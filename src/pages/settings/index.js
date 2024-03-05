import styles from './settings.module.scss';
import tml from './settings.hbs';
import form from '../../components/form';
import input from '../../components/input';
import fileInput from '../../components/fileInput';
import button from '../../components/button';

export default function (ctx = {}) {
  const baseCtx = {
    data: 'Settings',
    title: 'Settings',
    form: form({
      inputs: [
        input({
          name: 'first_name',
          id: 'first_name',
          helper: 'This field is required',
          label: 'First name',
          outlined: true,
        }),
        input({
          name: 'second_name',
          id: 'second_name',
          helper: 'This field is required',
          label: 'Second name',
          outlined: true,
        }),
        input({
          name: 'login',
          id: 'login',
          helper: 'This username is already exists',
          label: 'Login',
          outlined: true,
        }),

        input({
          name: 'email',
          id: 'email',
          helper: 'This email already exists',
          label: 'Email',
          outlined: true,
        }),
        input({
          name: 'phone',
          id: 'phone',
          helper: 'This phone already exists',
          label: 'Phone',
          outlined: true,
        }),
        input({
          name: 'display_name',
          id: 'display_name',
          helper: 'This phone already exists',
          label: 'Display name',
          outlined: true,
        }),
        fileInput({
          name: 'avatar',
          id: 'avatar',
          helper: 'File must be jpg, png or webp format',
          label: 'Avatar',
          outlined: true,
        }),
        input({
          name: 'oldPassword',
          id: 'oldPassword',
          helper: 'This password is too easy',
          label: 'Old password',
          outlined: true,
        }),
        input({
          name: 'newPassword',
          id: 'newPassword',
          helper: 'This password is too easy',
          label: 'New password',
          outlined: true,
        }),
      ],
      submit: button({
        name: 'Sign Up',
        href: 'signup',
      }),
    }),
    styles,
  };

  return tml({ ...baseCtx, ...ctx });
}
