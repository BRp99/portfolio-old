import Projects from "./Projects/Projects"
import styles from "./ReactProjects.module.css"

export default function ReactProjects() {
  return (
    <div id="projects" className={styles.container}>
      <h2 className={styles.h2}>Projects</h2>
      <Projects />
    </div>
  )
}
