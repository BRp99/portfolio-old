import ContactSection from "./ContactSection/ContactSection"
import HeroSection from "./HeroSection/HeroSection"
import styles from "./HomePage.module.css"
import ProjectsSection from "./ProjectsSection/ProjectsSection"
import SkillsSection from "./SkillsSection/SkillsSection"

export default function HomePage() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
