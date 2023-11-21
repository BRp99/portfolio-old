import { emailIcon, gitIcon } from "../../../../icons/icons"
import styles from "./Social.module.css"

export default function Social() {
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
        <div className={styles.email_icon}>
          {emailIcon}
          <span className={styles.text}>Send email</span>
        </div>
      </a>
      <div className={styles.git_hub}>
        <a href="https://github.com/BRp99" className={styles.call_to_action}>
          <div className={styles.call_to_action_hover}></div>
          <div className={styles.git_hub_icon}>
            {gitIcon}
            <span className={styles.text}>GitHub Account</span>
          </div>
        </a>
      </div>
    </div>
  )
}
