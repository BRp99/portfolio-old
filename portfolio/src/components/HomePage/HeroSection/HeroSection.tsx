import HireMe from "./HireMe/HireMe"
import BackImage from "./BackImage/BackImage"
import FETechnologies from "./FETechnologies/FETechnologies"
import styles from "./HeroSection.module.css"

export default function HeroSection() {
  return (
    <>
      <div id="hero-section" className={styles.container}>
        <div className={styles.sub_container}>
          <div className={styles.my_name_is}>Hi! My name is Beatriz.</div>
          <h1 className={styles.title}>Frontend Developer</h1>
          <h3 className={styles.i_make}>I make things simple.</h3>
        </div>
        <div className={styles.hire_me_back_image_container}>
          <div className={styles.hire_me}>
            <HireMe />
          </div>
        </div>
        <div className={styles.f_e_technologies}>
          <FETechnologies />
        </div>
      </div>
      <div className={styles.back_image}>
        <BackImage />
      </div>
    </>
  )
}
