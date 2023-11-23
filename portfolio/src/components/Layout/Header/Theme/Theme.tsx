import styles from "./Theme.module.css"
import { useThemeContext } from "../../../context/ThemeContext"

export default function Theme() {
  const { darkMode, onClick } = useThemeContext()

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={!darkMode} onChange={onClick} />
      <span className={styles.slider}></span>
      <span className={`${styles.text} ${styles.on}`}> Light</span>
      <span className={`${styles.text} ${styles.off}`}>Dark</span>
    </label>
  )
}
