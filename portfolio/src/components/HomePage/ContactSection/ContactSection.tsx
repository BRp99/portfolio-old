import FancyButton from "../../FancyButton/FancyButton"
import styles from "./ContactSection.module.css"

export default function ContactSection() {
  return (
    <div id="call-to-action" className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Let's collaborate!</h2>

        <div className={styles.actions}>
          <div>
            <div>Reach out via email.</div>
            <FancyButton url="mailto:bp111199@gmail.com?subject=Entreview">{emailIcon} Send email</FancyButton>
          </div>
          <div>
            <div>Discover more.</div>
            <FancyButton url="https://github.com/BRp99">{gitIcon} GitHub</FancyButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export const emailIcon = (
  <svg
    height="1em"
    viewBox="0 0 32 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="none"
    strokeWidth="1"
    fillRule="evenodd"
  >
    <g transform="translate(-412.000000, -259.000000)">
      <path d="M442,279 C442,279.203 441.961,279.395 441.905,279.578 L433,270 L442,263 L442,279 L442,279 Z M415.556,280.946 L424.58,271.33 L428,273.915 L431.272,271.314 L440.444,280.946 C440.301,280.979 415.699,280.979 415.556,280.946 L415.556,280.946 Z M414,279 L414,263 L423,270 L414.095,279.578 C414.039,279.395 414,279.203 414,279 L414,279 Z M441,261 L428,271 L415,261 L441,261 L441,261 Z M440,259 L416,259 C413.791,259 412,260.791 412,263 L412,279 C412,281.209 413.791,283 416,283 L440,283 C442.209,283 444,281.209 444,279 L444,263 C444,260.791 442.209,259 440,259 L440,259 Z" />
    </g>
  </svg>
)

export const gitIcon = (
  <svg
    height="1em"
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    stroke="none"
    strokeWidth="1"
    fillRule="evenodd"
    fill="currentColor"
  >
    <g transform="translate(-140.000000, -7559.000000)">
      <g transform="translate(56.000000, 160.000000)">
        <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" />
      </g>
    </g>
  </svg>
)
