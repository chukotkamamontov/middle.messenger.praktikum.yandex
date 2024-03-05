import styles from './signin.module.scss';
import tml from './signin.hbs';
import form from '../../components/form';
import input from '../../components/input';
import button from '../../components/button';

export default function (ctx = {}) {
  const baseCtx = {
    title: 'Sign In',
    form: form({
      inputs: [
        input({
          name: 'username',
          id: 'username',
          helper: 'Help username',
          label: 'Username',
          outliner: true,
          placeholder: 'Type your username...',
        }),
        input({
          name: 'password',
          id: 'password',
          helper: 'Help password',
          label: 'Password',
          outliner: true,
          placeholder: 'Type your password...',
        }),
      ],
      submit: button({
        name: 'Sign In',
        type: 'submit',
      }),
    }),
    styles,
  };

  return tml({ ...baseCtx, ...ctx });
}
