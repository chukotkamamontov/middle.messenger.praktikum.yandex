import styles from "./home.module.scss";
import tml from "./home.hbs";

export default function (ctx = {}, route) {
  const baseCtx = {
    data: "HOME PAGE",
    styles,
  };

  return tml({ ...baseCtx, ...ctx });
}
