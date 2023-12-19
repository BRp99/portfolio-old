import CallToAction from "../../../HomePage/HeroSection/CallToAction/CallToAction"
import styles from "./Navigation.module.css"

export default function Navigation() {
  return (
    <div className={styles.container}>
      <CallToAction context="Contact Me" />
    </div>
  )
}
