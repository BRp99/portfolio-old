import { emailIcon, gitIcon } from "../../../icons/icons"
import styles from "./CallToAction.module.css"

export default function CallToAction() {
  return (
    <div id="call-to-action" className={styles.container}>
      <h2 className={styles.lets_discuss}> Let's Discuss How I Can Contribute to Your Team!</h2>
      <div className={styles.phrase}>
        <div className={styles.reach}>Reach out via email!</div>
        <div className={styles.discover}>Discover more. Explore my work on GitHub!</div>
      </div>

      <div className={styles.anchors}>
        <a
          className={styles.call_to_action}
          onClick={() => {
            window.location.href = "mailto:bp111199@gmail.com?subject=Portfolio"
          }}
        >
          <div className={styles.call_to_action_hover}></div>
          <div className={styles.email}>
            <div className={styles.icon}> {emailIcon}</div>
            <span className={styles.text}> Send email</span>
          </div>
        </a>

        <a href="https://github.com/BRp99" className={styles.call_to_action}>
          <div className={styles.call_to_action_hover}></div>
          <div className={styles.git_hub}>
            <div className={styles.icon}>{gitIcon}</div>
            <span className={styles.text}> GitHub</span>
          </div>
        </a>
      </div>
    </div>
  )
}
