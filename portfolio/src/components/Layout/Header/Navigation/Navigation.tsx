import styles from "./Navigation.module.css"

export default function Navigation() {
  return (
    <div className={styles.container}>
      {/* <a href="#hero-section">About Me</a> */}
      <a href="#projects">Projects</a>
      {/* <a className={styles.contact_me} href="#call-to-action">
        Contact Me
      </a> */}

      <a href="#call-to-action" className={styles.call_to_action}>
        <div className={styles.call_to_action_hover}></div>
        <span className={styles.text}>Contact Me</span>
      </a>
    </div>
  )
}
