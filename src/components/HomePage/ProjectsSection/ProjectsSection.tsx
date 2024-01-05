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
      demoURL: "https://brp99.github.io/",
    },
    {
      id: 3,
      imgURL: "./img/advent-of-code.png",
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
      id: 4,
      imgURL: "./img/plot_coin_market_cap.png",
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
      codeURL: "https://github.com/BRp99/CryptoScrape-web-scraping-cryptocurrency-price-changes",
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
