import styles from "./error.module.scss";
import tml from "./error.hbs";

export default function (ctx = {}, route) {
  const baseCtx = {
    data: ctx.code,
    styles,
  };

  return tml({ ...baseCtx, ...ctx });
}
