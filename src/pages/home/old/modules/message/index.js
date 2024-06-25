import tmp from './message.hbs';
import styles from './message.module.scss';

export default function (ctx = {}) {
  const baseCtx = {
    styles,
  };
  return tmp({ ...baseCtx, ...ctx });
}
