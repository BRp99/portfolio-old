import React, { useState } from "react"
import styles from "./HamburgerMenu.module.css"

export default function HamburgerMenu() {
  const [isMenuActive, setMenuActive] = useState(false)

  const toggleMenu = () => {
    setMenuActive((prevMenuActive) => !prevMenuActive)
  }

  return <div></div>
}
