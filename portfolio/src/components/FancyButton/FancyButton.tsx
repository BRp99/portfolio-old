import { ReactNode } from "react"
import styles from "./FancyButton.module.css"
import { useThemeContext } from "../context/ThemeContext"

interface Props {
  url: string
  children: ReactNode
}

export default function FancyButton({ children, url }: Props) {
  return (
    <a className={styles.button} href={url} target="_blank" rel="noreferrer noopener">
      <div className={styles.button_hover} />
      <div className={styles.button_content}>{children}</div>
    </a>
  )
}
