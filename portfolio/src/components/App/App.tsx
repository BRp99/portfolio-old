import Layout from "../Layout/Layout"
import HomePage from "../HomePage/HomePage"
import ThemeProvider from "../context/ThemeContext"
import { useEffect } from "react"

export default function App() {
  useEffect(() => {
    console.log("Setting up dark mode listener")
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      console.log("media querry event:", e)
      console.log("e.matches:", e.matches)
      if (e.matches) {
        // browser is set to darkmode:
        document.documentElement.style.setProperty("--background-color", "var(--background-color-dark)")
        document.documentElement.style.setProperty("--background2-color", "var(--background2-color-dark)")
        document.documentElement.style.setProperty("--header-background-color", "var(--header-background-color-dark)")

        document.documentElement.style.setProperty("--text-color", "var(--text-color-dark)")
        console.log("The system or the browser is set to dark mode")
      } else {
        // browser is set to light mode:
        document.documentElement.style.setProperty("--background-color", "var(--background-color-light)")
        document.documentElement.style.setProperty("--background2-color", "var(--background2-color-light)")
        document.documentElement.style.setProperty("--header-background-color", "var(--header-background-color-light)")

        document.documentElement.style.setProperty("--text-color", "var(--text-color-light)")
        console.log("The system or the browser is set to light mode")
      }
    }

    darkModeQuery.addEventListener("change", handleDarkModeChange)
    console.log("Event listener added for dark mode change")

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
