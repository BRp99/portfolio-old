import styles from "./ProjectB.module.css"

export default function ProjectB() {
  return (
    <div className={styles.container}>
      <img className={styles.img} src="/img/projectA.jpg" alt="" />
      <div className={styles.project_number}>02</div>
    </div>
  )
}
