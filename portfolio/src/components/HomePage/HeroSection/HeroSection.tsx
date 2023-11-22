import HireMe from "./HireMe/HireMe"
import HeroImage from "./HeroImage/HeroImage"
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
        <div className={styles.hire_me}>
          <HireMe />
        </div>

        <div className={styles.f_e_technologies}>
          <FETechnologies />
        </div>
        <a href="#projects" className={styles.scrool_down}>
          Scroll Down {arrowDownSVG}
        </a>
      </div>
      <div className={styles.back_image}>
        <HeroImage />
      </div>
    </>
  )
}

// const mouseSVG = (
//   <svg height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path
//       d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
//       stroke="#1C274C"
//       strokeWidth="1.5"
//     />
//     <path opacity="0.5" d="M12 5V8" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// )

const arrowDownSVG = (
  <svg height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
