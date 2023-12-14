import styles from "./Footer.module.css"

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <div className={styles.container}>
      <div className={styles.text}>&copy; {getCurrentYear()} Beatriz Pereira. All rights reserved</div>
    </div>
  )
}
