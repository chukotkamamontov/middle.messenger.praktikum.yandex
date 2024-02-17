import styles from "./title.module.scss";
import tml from "./title.hbs";

export default function (ctx = {}) {
  const baseCtx = {
    text: ctx,
    styles,
  };

  return tml({ ...baseCtx, ...ctx });
} 
