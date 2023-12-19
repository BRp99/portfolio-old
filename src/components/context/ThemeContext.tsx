import { ReactNode, useContext, createContext, useEffect } from "react"
import { useLocalStorage } from "../hook/useLocalStorage"

type ThemeProviderProps = {
  children: ReactNode
}

type ThemeContext = {
  darkMode: boolean
  onClick(): void
}

const ThemeContext = createContext({} as ThemeContext)

export function useThemeContext() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [darkMode, setDarkMode] = useLocalStorage<boolean>("theme", false)

  useEffect(() => {
    if (darkMode) {
      // to dark
      document.documentElement.style.setProperty("--background-color", "var(--background-color-dark)")
      document.documentElement.style.setProperty("--background2-color", "var(--background2-color-dark)")
      document.documentElement.style.setProperty("--header-background-color", "var(--header-background-color-dark)")
      document.documentElement.style.setProperty("--text-color", "var(--text-color-dark)")
    } else {
      // to light
      document.documentElement.style.setProperty("--background-color", "var(--background-color-light)")
      document.documentElement.style.setProperty("--background2-color", "var(--background2-color-light)")
      document.documentElement.style.setProperty("--header-background-color", "var(--header-background-color-light)")
      document.documentElement.style.setProperty("--text-color", "var(--text-color-light)")
    }
  }, [darkMode])

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

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        onClick,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
