import { useState, useEffect } from "react"
import styles from "./HamburgerMenu.module.css"

export default function HamburgerMenu() {
  useEffect(() => {
    const menuBtn = document.querySelector("." + styles.hamburger)
    const mobileMenu = document.querySelector("." + styles.mobile_nav)

    const handleClick = () => {
      if (menuBtn && mobileMenu) {
        menuBtn.classList.toggle("is-active")
        mobileMenu.classList.toggle("is-active")
      }
    }

    if (menuBtn) {
      menuBtn.addEventListener("click", handleClick)
    }

    return () => {
      // Remover o event listener ao desmontar o componente
      if (menuBtn) {
        menuBtn.removeEventListener("click", handleClick)
      }
    }
  }, [])

  return (
    <div>
      <button className={styles.hamburger}>
        <div className={styles.bar}></div>
      </button>

      <nav className={styles.mobile_nav}>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  )
}
