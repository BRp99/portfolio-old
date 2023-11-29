import HamburgerMenu from "./HamburgerMenu/HamburgerMenu"
import styles from "./Header.module.css"
import Navigation from "./Navigation/Navigation"
import Theme from "./Theme/Theme"

export default function Header() {
  return (
    <div className={styles.container}>
      <a href="#hero-section" className={styles.logo}>
        BP
      </a>
      <div className={styles.hamburger}>
        <HamburgerMenu />
      </div>
      <div className={styles.right}>
        <Theme />
        <Navigation />
      </div>
    </div>
  )
}
