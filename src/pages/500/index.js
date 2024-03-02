import styles from "./500.module.scss";
import tml from "./500.hbs";

export default function (ctx = {}, route) {
  const baseCtx = {
    data: ctx.code,
    styles,
  };

  return tml({ ...baseCtx, ...ctx });
}

