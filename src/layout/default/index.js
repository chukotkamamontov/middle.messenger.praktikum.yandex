import styles from './default.module.scss';
import tml from './default.hbs';

console.log('[document.location]: ', document.location);

export default function (outlet) {
  const basetCtx = {
    data: {
      baseUrl: document.location.origin,
    },
    styles,
  };
  return tml({ ...basetCtx, outlet });
}
