import styles from "./Navigation.module.css"

export default function Navigation() {
  return (
    <div className={styles.container}>
      <a href="#hero-section">About Me</a>
      <a href="#projects">Projects</a>
      <a className={styles.contact_me} href="#call-to-action">
        Contact Me
      </a>
    </div>
  )
}
