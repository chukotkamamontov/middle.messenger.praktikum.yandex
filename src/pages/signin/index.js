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
          name: 'Username',
          id: 'username',
          helper: 'Help username',
          label: 'Username',
          outliner: true,
          placeholder: 'Type your username...',
        }),
        input({
          name: 'Password',
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
    // link: link({
    //   name: "Sign Up",
    //   href: "signup"
    // }),
    styles,
  };

  return tml({ ...baseCtx, ...ctx });
}
