import React from "react"
import styles from "./Project.module.css"
import FancyButton from "../../../FancyButton/FancyButton"

interface Props {
  imgURL: string
  title: string
  tags?: string[]
  description: string
  codeURL: string
  demoURL: string
}

export default function Project({ imgURL, title, tags = [], description, codeURL, demoURL }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img src={imgURL} alt={title} />
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <div>{tag}</div>
          ))}
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.actions}>
          <FancyButton url={codeURL}>View Code</FancyButton>
          <FancyButton url={demoURL}>View Demo</FancyButton>
        </div>
      </div>
    </div>
  )
}
