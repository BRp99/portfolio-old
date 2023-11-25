import styles from "./Project.module.css"
import ProjectButton from "./ProjectButton/ProjectButton"
import { useThemeContext } from "../../../context/ThemeContext"

interface Props {
  imgURL: string
  title: string
  tags?: string[]
  description: string
  codeURL: string
  demoURL: string
}

export default function Project({ imgURL, title, tags = [], description, codeURL, demoURL }: Props) {
  const { darkMode } = useThemeContext()

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark_theme : ""}`}>
      <div className={styles.img_container}>
        <img src={imgURL} alt={title} />
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <div>{tag}</div>
          ))}
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.actions}>
          <ProjectButton url={codeURL}>View Code</ProjectButton>
          <ProjectButton url={demoURL}>View Demo</ProjectButton>
        </div>
      </div>
    </div>
  )
}
