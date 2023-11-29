import { useThemeContext } from "../../../context/ThemeContext"
import Navigation from "../Navigation/Navigation"
import Theme from "../Theme/Theme"
import styles from "./HamburgerMenu.module.css"
import { useState } from "react"

export default function HamburgerMenu() {
  const { darkMode } = useThemeContext()

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark_theme : ""}`}>
      <div onClick={toggleMenu}> {hamburgerIcon}</div>
      {menuOpen && (
        <div className={styles.menu_box}>
          <div>
            <Theme />
          </div>
          <div>
            <a href="#projects">Projects</a>
          </div>

          <div>
            <Navigation />
          </div>
        </div>
      )}
    </div>
  )
}

export const hamburgerIcon = (
  <svg height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 17L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)
