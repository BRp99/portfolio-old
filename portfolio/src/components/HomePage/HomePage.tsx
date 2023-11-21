import CallToAction from "./CallToAction/CallToAction"
import HeroSection from "./HeroSection/HeroSection"
import styles from "./HomePage.module.css"
import ReactProjects from "./ReactProjects/ReactProjects"

export default function HomePage() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <ReactProjects />
      <CallToAction />
    </div>
  )
}
