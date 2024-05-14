import styles from "./CVButton.module.css"
import { useThemeContext } from "../../../context/ThemeContext"

export default function CVButton() {
  const { darkMode } = useThemeContext()

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark_theme : ""}`}>
      <a className={styles.call_to_action} href="https://brp99.github.io/CV.pdf">
        <div className={styles.call_to_action_hover}></div>
        <span className={styles.text}> See my CV </span>
      </a>
    </div>
  )
}
