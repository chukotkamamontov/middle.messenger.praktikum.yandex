import styles from "./signin.module.scss";
import tml from "./signin.hbs";

export default function (ctx = {}, route) {
  const baseCtx = {
    data: "SIGN IN PAGE",
    styles,
  };

  return tml({ ...baseCtx, ...ctx });
}
