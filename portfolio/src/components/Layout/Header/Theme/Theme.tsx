import { useState } from "react"

export default function Theme() {
  const [darkMode, setDarkMode] = useState(false)
  function onClick() {
    if (darkMode) {
      // Switch to light mode
      console.log("switching to light mode")
      document.documentElement.style.setProperty("--background-color", "var(--background-color-light)")
      document.documentElement.style.setProperty("--background2-color", "var(--background2-color-light)")
      document.documentElement.style.setProperty("--header-background-color", "var(--header-background-color-light)")

      document.documentElement.style.setProperty("--text-color", "var(--text-color-light)")
    } else {
      // Switch to dark mode
      console.log("switching to dark mode")
      document.documentElement.style.setProperty("--background-color", "var(--background-color-dark)")
      document.documentElement.style.setProperty("--background2-color", "var(--background2-color-dark)")
      document.documentElement.style.setProperty("--header-background-color", "var(--header-background-color-dark)")

      document.documentElement.style.setProperty("--text-color", "var(--text-color-dark)")
    }
    setDarkMode((s) => !s)
  }

  return <button onClick={onClick}>{darkMode ? "Dark" : "Light"}</button>
}
