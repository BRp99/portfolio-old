import { useThemeContext } from "../../../context/ThemeContext"
import Navigation from "../Navigation/Navigation"
import Theme from "../Theme/Theme"
import styles from "./HamburgerMenu.module.css"
import { useState } from "react"

export default function HamburgerMenu() {
  const { darkMode } = useThemeContext()

  const [menuOpen, setMenuOpen] = useState(false)
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMenuOpen = menuOpen

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    // setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark_theme : ""}`}>
      <div onClick={toggleMenu}> {menuOpen ? closeIcon() : hamburgerIcon()} </div>
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

export const hamburgerIcon = () => (
  <svg className={styles.hamburger} height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 17L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const closeIcon = () => (
  <svg className={styles.close} height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
      fill="currentColor"
    />
  </svg>
)
