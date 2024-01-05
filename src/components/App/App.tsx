import Layout from "../Layout/Layout"
import HomePage from "../HomePage/HomePage"
import ThemeProvider from "../context/ThemeContext"
import { useEffect } from "react"

export default function App() {
  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        // browser is set to darkmode:
        document.documentElement.style.setProperty("--background-color", "var(--background-color-dark)")
        document.documentElement.style.setProperty("--background2-color", "var(--background2-color-dark)")
        document.documentElement.style.setProperty("--header-background-color", "var(--header-background-color-dark)")

        document.documentElement.style.setProperty("--text-color", "var(--text-color-dark)")
      } else {
        // browser is set to light mode:
        document.documentElement.style.setProperty("--background-color", "var(--background-color-light)")
        document.documentElement.style.setProperty("--background2-color", "var(--background2-color-light)")
        document.documentElement.style.setProperty("--header-background-color", "var(--header-background-color-light)")

        document.documentElement.style.setProperty("--text-color", "var(--text-color-light)")
      }
    }

    darkModeQuery.addEventListener("change", handleDarkModeChange)

    return () => {
      darkModeQuery.removeEventListener("change", handleDarkModeChange)
    }
  }, [])

  return (
    <div>
      <ThemeProvider>
        <Layout>
          <HomePage />
        </Layout>
      </ThemeProvider>
    </div>
  )
}
