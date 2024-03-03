import styles from './home.module.scss';
import tml from './home.hbs';
import leftPanel from './modules/leftPanel';
import lenta from './modules/lenta';

export default function (ctx = {}) {
  const baseCtx = {
    leftPanel: leftPanel(),
    lenta: lenta(),
    data: 'HOME PAGE',
    styles,
  };

  return tml({ ...baseCtx, ...ctx });
}
