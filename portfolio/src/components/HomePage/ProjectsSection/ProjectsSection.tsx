// import Project from "./Project/Project"
// import styles from "./ProjectsSection.module.css"

// export default function ProjectsSection() {
//   return (
//     <div id="projects" className={styles.container}>
//       <h2 className={styles.title}>Projects</h2>
//       <div className={styles.projects}>
//         <Project
//           key="project1"
//           imgURL="./img/MarketFusion.png"
//           title="あ - it's the simple things"
//           tags={["E-commerce", "API", "React", "Typescript"]}
//           description="Build an ecommerce application where I could learn to write code based on a solid architecture and reusable, scalable components. The application's features are as follows: adding products to the cart and favorites; choose quantities; authentication with Auth0; search and navigation between application pages."
//           codeURL="https://github.com/BRp99/e-commerce-app.git"
//           demoURL="https://e-commerce-jurp1avue-brp99.vercel.app"
//         />
//         <Project
//           key="project2"
//           imgURL="./img/portfolio_light.png"
//           title="This Portfolio"
//           tags={["Portfolio", "React"]}
//           description="This portfolio is more than just a collection of projects. It is the result of my journey throughout this year, a testimony of my learning, improvement and passion for development. Each project I present here is not just a code, but a learning path, where each line written represents a discovery and implementation of new technologies and approaches."
//           codeURL="https://github.com/BRp99/the-portfolio-react.git"
//           demoURL="#"
//         />
//         <Project
//           key="project3"
//           imgURL=""
//           title="Next Project: Tic Tac Toe"
//           tags={["Game"]}
//           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquam dolore, sint obcaecati quibusdam laborum id neque quisquam quis explicabo, facilis, illum inventore consequuntur! Iure provident ex quibusdam at numquam."
//           codeURL="#"
//           demoURL="#"
//         />
//       </div>
//     </div>
//   )
// }

import { useThemeContext } from "../../context/ThemeContext"
import Project from "./Project/Project"
import styles from "./ProjectsSection.module.css"

export default function ProjectsSection() {
  const { darkMode } = useThemeContext()

  const projectsData = [
    {
      id: 1,
      imgURL: "./img/MarketFusion.png",
      title: "あ - it's the simple things",
      tags: ["E-commerce", "API", "React", "Typescript"],
      description: (
        <>
          <p>
            I wanted to build an ecommerce application where I could learn to write code based on a solid architecture, reusable and scalable
            components.
          </p>
          <p>
            The application's features are as follows:
            <ul>
              {" "}
              <li>adding products to the cart and favorites;</li>
              <li>choose quantities;</li>
              <li>authentication with Auth0;</li>
              <li>search and navigation between application pages.</li>
            </ul>
          </p>
        </>
      ),
      codeURL: "https://github.com/BRp99/e-commerce-app.git",
      demoURL: "https://e-commerce-jurp1avue-brp99.vercel.app",
    },
    {
      id: 2,
      imgURL: !darkMode ? "./img/portfolio_light.png" : "./img/portfolio_dark.png",
      title: "This Portfolio",
      tags: ["Portfolio", "React"],
      description: (
        <>
          <p>This portfolio is more than just a collection of projects.</p>
          <p>It is the result of my journey throughout this year, a testimony of my learning, improvement and passion for development.</p>
          <p>
            Each project I present here is not just a code, but a learning path, where each line written represents a discovery and implementation of
            new technologies and approaches.
          </p>
        </>
      ),
      codeURL: "https://github.com/BRp99/the-portfolio-react.git",
      demoURL: "#",
    },
    {
      id: 3,
      imgURL: "",
      title: "Next Project: Tic Tac Toe",
      tags: ["Game"],
      description:
        "The next project will be the Tic Tac Toe game to create user interactions; manipulation and integration of inputs basic concepts of DOM manipulation in web environments.",
      codeURL: "#",
      demoURL: "#",
    },
  ]

  return (
    <div id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projectsData.map((project, id, title) => (
          <Project key={`${id} ${title}`} {...project} />
        ))}
      </div>
    </div>
  )
}