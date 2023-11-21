import styles from "./HireMe.module.css"

export default function HireMe() {
  return (
    <div className={styles.container}>
      <a
        href="#"
        className={styles.call_to_action}
        onClick={() => {
          window.location.href = "mailto:bp111199@gmail.com?subject=Portfolio"
        }}
      >
        <div className={styles.call_to_action_hover}></div>
        <span className={styles.text}>Hire me</span>
      </a>
    </div>
  )
}
