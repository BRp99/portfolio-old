import styles from "./Theme.module.css"
import { useThemeContext } from "../../../context/ThemeContext"

export default function Theme() {
  const { darkMode, onClick } = useThemeContext()

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={!darkMode} onChange={onClick} />
      <span className={styles.slider}></span>
      <span className={`${styles.text} ${styles.on}`}> {sunSVG}</span>
      <span className={`${styles.text} ${styles.off}`}>{moonSVG}</span>
    </label>
  )
}

const moonSVG = (
  <svg height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill="currentColor"
    />
  </svg>
)

const sunSVG = (
  <svg height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4 12L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M22 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path opacity="0.5" d="M19.7778 4.22266L17.5558 6.25424" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path opacity="0.5" d="M4.22217 4.22266L6.44418 6.25424" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path opacity="0.5" d="M6.44434 17.5557L4.22211 19.7779" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path opacity="0.5" d="M19.7778 19.7773L17.5558 17.5551" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)
