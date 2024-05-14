import { useThemeContext } from "../../context/ThemeContext"
import Project, { ProjectProps } from "./Project/Project"
import styles from "./ProjectsSection.module.css"

export default function ProjectsSection() {
  const { darkMode } = useThemeContext()

  const projectsData: ProjectProps[] = [
    {
      media: { type: "image", url: "./img/connectify.png" },
      title: "Connectify",
      tags: ["Next.js", "Blocknative", "Web3-Onboard", "Ethers.js", "TypeScript"],
      description: (
        <>
          <p> This is a demo of a project where I explored using Next.js with TypeScript, combined with Blocknative and Web3-Onboard.</p>
          <ul>
            <li>Through this project, I learned how to connect Ethereum wallets using the ethers.js library;</li>
            <li>
              I explored how to integrate secure and efficient authentication with Blocknative, while taking advantage of TypeScript's powerful typing
              system to ensure more robust and error-free code.
            </li>
          </ul>
        </>
      ),
      codeURL: "https://github.com/BRp99/web3-onboard-nextjs",
      demoURL: "https://web3-onboard-nextjs-brp99s-projects.vercel.app/",
    },
    {
      media: { type: "video", url: darkMode ? "./videos/bask2.gif" : "./videos/bask1.gif" },

      title: "Body Pose Detection",
      tags: ["Computer Vision", "OpenCv", "MediaPipe", "Detection Pose"],
      description: (
        <>
          <p>With this project I acquired some knowledge about the principles and techniques of computer vision, like:</p>
          <p>
            <ul>
              <li>Track different parts of the body;</li>
              <li>
                <p>Identify different reference points in these parts of the body;</p>
                <li>
                  <p>Use reference points to create the complete body posture.</p>
                </li>
              </li>
            </ul>
          </p>
        </>
      ),
      codeURL: "https://github.com/BRp99/body-pose-detection",
    },
    {
      media: { type: "image", url: "./img/MarketFusion.png" },
      title: "あ - it's the simple things",
      tags: ["E-commerce", "API", "React", "Typescript", "Cypress"],
      description: (
        <>
          <p>I wanted to build an ecommerce application where I could learn to write code based on a reusable and scalable components.</p>
          <p>
            The application's features are as follows:
            <ul>
              <li>adding products to the cart and favorites;</li>
              <li>choose quantities;</li>
              <li>authentication with Auth0;</li>
              <li>search and navigation between application pages.</li>
            </ul>
          </p>
        </>
      ),
      codeURL: "https://github.com/BRp99/e-commerce-app.git",
      demoURL: "https://buy-simple-things.vercel.app/",
    },
    {
      media: { type: "image", url: "./img/graphic.png" },
      title: "CryptoScrape: web scraping cryptocurrency price changes",
      tags: ["CoinMarketCap", "Web Scraping", "Python", "BeautifulSoup"],
      description: (
        <>
          <p>My next project is continuing my Python journey, focused on web scraping to extract cryptocurrency price data from CoinMarketCap.</p>
          <p>
            Initially, data extraction is performed statically using BeautifulSoup for web scraping and pandas for data manipulation and matplotlib
            for visualization.
          </p>
          <p> Later, there are plans to explore dynamic data loading using Selenium.</p>
        </>
      ),
      codeURL: "https://github.com/BRp99/cryptoScrape-web-scraping-cryptocurrency-price-changes",
    },
    {
      media: { type: "image", url: "./img/advent-of-code.png" },
      title: "Advent of Code 2023",
      tags: ["Python", "Advent of Code 2023", "Posts", "GitHub"],
      description: (
        <>
          <p>
            In this project I create posts dedicated to solving the Advent of Code 2023 challenges, where I can improve my skills in problem solving,
            programming logic and algorithms.
          </p>
          <p>
            One of the fundamental decisions for this project is the choice of programming language, and I am determined to learn Python, as it can
            open doors to a wide range of applications, from web development to data analysis and artificial intelligence.
          </p>
        </>
      ),
      codeURL: "https://github.com/BRp99/advent-of-code-2023",
    },
    {
      media: { type: "image", url: darkMode ? "./img/portfolio_dark.png" : "./img/portfolio_light.png" },
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
      codeURL: "https://github.com/BRp99/BRp99.github.io",
      demoURL: "https://brp99.github.io/",
    },
  ]

  return (
    <div id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projectsData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </div>
  )
}
