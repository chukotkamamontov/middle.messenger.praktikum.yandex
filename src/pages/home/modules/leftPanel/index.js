import styles from "./leftPanel.module.scss";
import tml from "./leftPanel.hbs";

export default function (ctx = {}, route) {
  const baseCtx = {
    data: "LEFT PANEL",
    styles,
  };

  return tml({ ...baseCtx, ...ctx });
}

