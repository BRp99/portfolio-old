import styles from "./ProjectA.module.css"

export default function ProjectA() {
  return (
    <div className={styles.container}>
      <img className={styles.img} src="/img/projectA.jpg" alt="E-commerce App" />
      <div className={styles.project_number}>01</div>
      {/* <div className={styles.icon}> {projectAIcon}</div> */}
    </div>
  )
}
