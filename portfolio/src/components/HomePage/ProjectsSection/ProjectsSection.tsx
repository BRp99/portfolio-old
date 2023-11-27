import Project from "./Project/Project"
import styles from "./ProjectsSection.module.css"

export default function ProjectsSection() {
  //   const description = `
  //   Goal: Build an application that follows a solid architecture, based on reusable and scalable components for future evolutions.

  //   Features: Users can easily add products to their cart and favorites, providing a fluid and personalized shopping experience; authentication is guaranteed by Auth0.
  // `

  return (
    <div id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        <Project
          imgURL=""
          title="あ - it's the simple things"
          tags={["E-commerce", "API", "React", "Typescript"]}
          description="I wanted to build an ecommerce application where I could learn to write code based on a solid architecture and reusable, scalable components. The application's features are as follows: adding products to the cart and favorites; choose quantities; authentication with Auth0; search and navigation between application pages."
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
