import HeroImage from "./HeroImage/HeroImage"
import styles from "./HeroSection.module.css"
import DownArrow from "./DownArrow/DownArrow"
import GetInTouch from "./GetInTouch/GetInTouch"

export default function HeroSection() {
  return (
    <>
      <div id="hero-section" className={styles.container}>
        <div className={styles.sub_container}>
          <div className={styles.greeting}>Hi! My name is Beatriz.</div>
          <h1 className={styles.title}>Frontend Developer</h1>
        </div>
        <div className={styles.hire_me}>
          <GetInTouch />
        </div>
      </div>
      <HeroImage />
      <DownArrow />
    </>
  )
}
