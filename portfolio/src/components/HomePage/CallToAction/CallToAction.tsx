import styles from "./CallToAction.module.css"
import Social from "./Social/Social"

export default function CallToAction() {
  return (
    <div id="call-to-action" className={styles.container}>
      <div>
        <h2 className={styles.lets_talk}> Let's talk!</h2>
      </div>
      <div className={styles.social}>
        <Social />
      </div>
    </div>
  )
}
