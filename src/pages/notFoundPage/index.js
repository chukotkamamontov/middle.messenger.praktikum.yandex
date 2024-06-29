import styles from './notFoundPage.module.scss';
import tml from './notFoundPage.hbs';

export default function (ctx = {}) {
  const baseCtx = {
    data: ctx.code,
    styles,
  };

  return tml({ ...baseCtx, ...ctx });
}
