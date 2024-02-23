import styles from "./notFoundPage.module.scss";
import tml from "./notFoundPage.hbs";

export default function (ctx = {}, route) {
  const baseCtx = {
    data: ctx.code,
    styles,
  };

  return tml({ ...baseCtx, ...ctx });
}
