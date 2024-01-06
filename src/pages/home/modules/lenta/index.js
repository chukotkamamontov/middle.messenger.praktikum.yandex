import styles from "./lenta.module.scss";
import tml from "./lenta.hbs";

export default function (ctx = {}, route) {
  const baseCtx = {
    data: "LENTA",
    styles,
  };

  return tml({ ...baseCtx, ...ctx });
}
