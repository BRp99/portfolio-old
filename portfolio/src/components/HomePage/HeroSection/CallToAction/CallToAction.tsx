import styles from "./CallToAction.module.css"

interface Props {
  context: string
}

export default function CallToAction({ context }: Props) {
  return (
    <div className={styles.container}>
      <a href="#call-to-action" className={styles.call_to_action}>
        <div className={styles.call_to_action_hover}></div>
        <span className={styles.text}> {context} </span>
      </a>
    </div>
  )
}
