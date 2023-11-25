import { useThemeContext } from "../../../context/ThemeContext"
import styles from "./CallToAction.module.css"

interface Props {
  context: string
}

export default function CallToAction({ context }: Props) {
  const { darkMode } = useThemeContext()

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark_theme : ""}`}>
      <a className={styles.call_to_action} href="#call-to-action">
        <div className={styles.call_to_action_hover}></div>
        <span className={styles.text}> {context} </span>
      </a>
    </div>
  )
}
