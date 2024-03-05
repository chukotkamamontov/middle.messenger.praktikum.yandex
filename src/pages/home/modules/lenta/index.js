import styles from './lenta.module.scss';
import tml from './lenta.hbs';
import message from '../message';

export default function (ctx = {}) {
  const baseCtx = {
    data: 'LENTA',
    message: message(),
    styles,
  };

  return tml({ ...baseCtx, ...ctx });
}
