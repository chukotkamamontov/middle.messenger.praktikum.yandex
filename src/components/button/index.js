import tmp from "./button.hbs"
import styles from "./button.module.scss"

export default function (ctx = {}) {
    const baseCtx = {
        styles
    }
    return tmp({ ...baseCtx, ...ctx })
}
