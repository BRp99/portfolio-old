import styles from "./ProjectButton.module.css"
import { useThemeContext } from "../../../../context/ThemeContext"
import { ReactNode } from "react"

interface Props {
  url: string
  children: ReactNode
}

export default function ProjectButton({ children, url }: Props) {
  const { darkMode } = useThemeContext()

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark_theme : ""}`}>
      <a className={styles.button} href={url} target="_blank" rel="noreferrer noopener">
        <div className={styles.button_hover} />
        <div className={styles.button_content}>{children}</div>
      </a>
    </div>
  )
}
