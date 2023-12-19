import HeroImage from "./HeroImage/HeroImage"
import styles from "./HeroSection.module.css"
import DownArrow from "./DownArrow/DownArrow"
import CallToAction from "./CallToAction/CallToAction"
import CVButton from "./CVButton/CVButton"

export default function HeroSection() {
  return (
    <>
      <div id="hero-section" className={styles.container}>
        <div className={styles.sub_container}>
          <div className={styles.greeting}>Hi! My name is Beatriz.</div>
          <h1 className={styles.title}>Frontend Developer</h1>
        </div>
        <div className={styles.hire_me}>
          <CallToAction context="Get in Touch" />
          <CVButton />
        </div>
      </div>
      <HeroImage />
      <DownArrow />
    </>
  )
}
