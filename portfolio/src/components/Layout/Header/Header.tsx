import styles from "./Header.module.css"
import Navigation from "./Navigation/Navigation"

export default function Header() {
  return (
    <div className={styles.container}>
      <a href="#hero-section" className={styles.logo}>
        BP
      </a>
      <Navigation />
    </div>
  )
}
