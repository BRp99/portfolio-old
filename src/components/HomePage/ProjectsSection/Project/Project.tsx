import styles from "./Project.module.css"
import ProjectButton from "./ProjectButton/ProjectButton"
import { useThemeContext } from "../../../context/ThemeContext"

type Media = {
  type: "image" | "video"
  url: string
}

export interface ProjectProps {
  media: Media
  title: string
  tags?: string[]
  description: string | JSX.Element
  codeURL: string
  demoURL?: string | null
}

export default function Project({ media, title, tags = [], description, codeURL, demoURL }: ProjectProps) {
  const { darkMode } = useThemeContext()

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark_theme : ""}`}>
      <div className={styles.img_container}>
        <img className={styles.image} src={media.url} alt={title} />
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
          {demoURL !== undefined && demoURL !== null && <ProjectButton url={demoURL}>View Demo</ProjectButton>}
          <ProjectButton url={codeURL}>View Code</ProjectButton>
        </div>
      </div>
    </div>
  )
}
