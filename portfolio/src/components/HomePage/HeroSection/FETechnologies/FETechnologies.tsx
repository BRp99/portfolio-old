import styles from "./FETechnologies.module.css"

export default function FETechnologies() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.first_row}> */}
      <div className={styles.react}>React JS</div>
      <div className={styles.ts}>Typescript</div>
      {/* </div> */}
      {/* <div className={styles.second_row}> */}
      <div className={styles.css}>{cssIcon} CSS3</div>
      <div className={styles.html}>HTML5</div>
      <div className={styles.html}>{horseIcon} Horseback Riding</div>

      {/* </div> */}
    </div>
  )
}

const cssIcon = (
  <svg height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" />
    <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" />
    <path
      d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
      fill="white"
    />
  </svg>
)

const horseIcon = (
  <svg height="1em" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#C1694F"
      d="M23.283 23.275s1.374 1.635 2.733 10.047c.143.883.201 1.775.217 2.678H36V7.448C31.613 3.975 25.601 3.259 18.322 5.69c0 0-5.408-3-6.147-3.739c-.719-.72-1.857-1.556-1.235.35c.364 1.112.764 2.373 2.358 4.862c-3.436 2.036-4.513 4.68-8.558 13.341C1.652 27.12.08 29.269.937 31.797c1.13 3.337 5.316 5.595 8.844 3.021c1.919-1.4 2.246-3.913 6.225-6.223c3.653-.065 7.277-1.604 7.277-5.32z"
    ></path>
    <path fill="#292F33" d="M36 6.012C27.665.301 14.354 1.473 15.909 6.19C25.51 4.328 31.77 7.731 36 13.358V6.012z"></path>
    <path
      fill="#292F33"
      d="M19.663 5.763c-2.878.233-7.157 1.595-9.296 3.967c0 0-.129-5.147 3.566-5.614c6.172-.779 5.809.363 5.809.363l-.079 1.284z"
    ></path>
    <path
      fill="#C1694F"
      d="M16.357 1.056c.558 1.155 4.006 1.79 5.056 6.029c1.051 4.24-3.134 2.951-4.356.855c-1.361-2.334-1.828-4.162-1.867-5.679c-.021-.801.039-3.538 1.167-1.205z"
    ></path>
    <path
      fill="#662113"
      d="M16.596 2.838c1.103.968 2.448 2.472 2.65 3.955c.202 1.483-1.125.988-1.736-.372c-.612-1.359-.753-2.779-1.134-3.233c-.38-.454.22-.35.22-.35z"
    ></path>
    <path fill="#292F33" d="M16.94 15.525a1.244 1.244 0 1 1-2.489 0a1.244 1.244 0 0 1 2.489 0z"></path>
    <path
      fill="#662113"
      d="M4.222 29.917c0 .881-.532 1.594-1.187 1.594s-1.187-.713-1.187-1.594c0-.882.532-1.596 1.187-1.596s1.187.714 1.187 1.596z"
    ></path>
    <path
      fill="#D99E82"
      d="M10.354 9.924c-.033-.017-.075-.014-.111-.024c-1.543 2.033-2.92 5.102-5.49 10.604c-1.356 2.903-2.42 4.946-3.116 6.538c1.628.226 3.285-1.442 3.945-3.271c.673-1.866 3.215-5.652 4.927-7.778c1.712-2.127 1.561-5.144-.155-6.069z"
    ></path>
  </svg>
)
