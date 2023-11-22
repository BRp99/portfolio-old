import styles from "./GetInTouch.module.css"

export default function GetInTouch() {
  return (
    <div className={styles.container}>
      <a href="#call-to-action" className={styles.call_to_action}>
        <div className={styles.call_to_action_hover}></div>
        <span className={styles.text}> Get in touch</span>
      </a>
    </div>
  )
}
