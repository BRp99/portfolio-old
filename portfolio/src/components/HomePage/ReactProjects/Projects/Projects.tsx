import ProjectA from "./ProjectA/ProjectA"
import ProjectB from "./ProjectB/ProjectB"
import ProjectC from "./ProjectC/ProjectC"
import styles from "./Projects.module.css"

export default function Projects() {
  return (
    <div className={styles.container}>
      <div>
        <ProjectA />

        <div className={styles.project_b}>
          <ProjectB />
        </div>

        <ProjectC />
      </div>
    </div>
  )
}
