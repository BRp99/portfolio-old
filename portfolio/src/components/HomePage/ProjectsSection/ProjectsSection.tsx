import Project from "./Project/Project"
import styles from "./ProjectsSection.module.css"

export default function ProjectsSection() {
  return (
    <div id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        <Project
          imgURL=""
          title="あ - it's the simple things"
          tags={["E-commerce", "API", "React", "Typescript"]}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquam dolore, sint obcaecati quibusdam laborum id neque quisquam quis explicabo, facilis, illum inventore consequuntur! Iure provident ex quibusdam at numquam."
          codeURL="#"
          demoURL="#"
        />
        <Project
          imgURL=""
          title="This Portfolio"
          tags={["Portfolio", "React"]}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquam dolore, sint obcaecati quibusdam laborum id neque quisquam quis explicabo, facilis, illum inventore consequuntur! Iure provident ex quibusdam at numquam."
          codeURL="#"
          demoURL="#"
        />
        <Project
          imgURL=""
          title="Next Projects"
          tags={["Web3", "Web2", "API"]}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquam dolore, sint obcaecati quibusdam laborum id neque quisquam quis explicabo, facilis, illum inventore consequuntur! Iure provident ex quibusdam at numquam."
          codeURL="#"
          demoURL="#"
        />
      </div>
    </div>
  )
}
