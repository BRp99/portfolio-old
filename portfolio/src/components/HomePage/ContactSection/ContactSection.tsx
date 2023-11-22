import { emailIcon, gitIcon } from "../../../icons/icons"
import FancyButton from "../../FancyButton/FancyButton"
import styles from "./ContactSection.module.css"

export default function ContactSection() {
  return (
    <div id="call-to-action" className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Let's collaborate!</h2>

        <div className={styles.actions}>
          <div>
            <div>Reach out via email.</div>
            <FancyButton url="mailto:bp111199@gmail.com?subject=Entreview">{emailIcon} Send email</FancyButton>
          </div>
          <div>
            <div>Discover more.</div>
            <FancyButton url="https://github.com/BRp99">{gitIcon} GitHub</FancyButton>
          </div>
        </div>
      </div>
    </div>
  )
}
