import tmp from './input.hbs';
import styles from './input.module.scss';

export default function (ctx = {}) {
  const baseCtx = {
    type: 'text',
    outlinedStyle: ctx.outlined ? styles.outlined : '',
    placeholder: ctx.placeholder,
    styles,
  };
  return tmp({ ...baseCtx, ...ctx });
}
