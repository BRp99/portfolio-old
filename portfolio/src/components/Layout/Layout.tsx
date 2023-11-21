import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import styles from "./Layout.module.css"
import { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
