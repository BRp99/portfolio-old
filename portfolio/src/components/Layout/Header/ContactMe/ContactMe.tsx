import BackImage from "../../../HomePage/HeroSection/BackImage/BackImage"
import styles from "./ContactMe.module.css"

export default function ContactMe() {
  return (
    <div className={styles.container}>
      <a href="#call-to-action" className={styles.contact_btn}>
        Contact Me
      </a>
    </div>
  )
}
