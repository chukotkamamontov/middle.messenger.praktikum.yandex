import styles from "./signup.module.scss";
import tml from "./signup.hbs";

export default function (ctx = {}, route) {
  const baseCtx = {
    data: "SIGN UP PAGE",
    styles,
  };

  return tml({ ...baseCtx, ...ctx });
}
