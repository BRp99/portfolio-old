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
          description="Objective: Learn how to fetch, use context and build an application that follows a solid architecture, based on reusable and scalable components for future evolutions.

          Code structure: folders organized into logical folders to facilitate code maintenance and navigation; I use ESLint configured for Typescript to reduce the incidence of bugs.
          
           
          
          Features: Users can easily add products to their cart and favorites, providing a fluid and personalized shopping experience; authentication is guaranteed by Auth0, increasing user security and trust; implementation of search and navigation between application pages
          
          I created my own hook to store information in Local Storage, providing not only additional functionality, but also a deeper understanding of how data persistence can be managed efficiently.
          
            Learn about the importance of giving objects meaningful names to make code more readable.
          
          Style: neumorphic style, because it is no longer used much and I wanted to understand this style better."
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
