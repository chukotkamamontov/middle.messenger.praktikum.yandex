import styles from "./form.module.scss";
import tml from "./form.hbs";
import input from "../input";

export default function (ctx = {}) {
    
  const baseCtx = {
    text: ctx,
    styles,
  };

  return tml({ ...baseCtx, ...ctx });
} 