import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./Home.module.css"
import RightContainer from "./RightContainer"

function Home() {
  return (
    <main className={styles.home_container}>
    <img src="./assets/backgroundImg.jpg" alt="alt img" className={styles.background_img}/>
      <div className={styles.content}>
        <div className={styles.content_top}>
          <div className={styles.portrait_container}>
            <img src="./assets/me.png" alt="me" className={styles.portrait} loading="lazy"/>
          </div>
          <div className={styles.intro_text}>
            <h2 className={styles.intro_h2}>Hi, I'm Ryan Webb!</h2>
            <p className={styles.intro_p}>
              A fullstack developer with a love for music, video games, the outdoors and a good challenge. I am based near Salt Lake City, Utah.
            </p>
          </div>
        </div>
        <div className={styles.content_bot}>
          <div className={styles.tech_stack}>
            <h2>Tech Stack</h2>
            <FontAwesomeIcon icon={["fab", "react"]} fontSize={40} />
            <FontAwesomeIcon icon={["fab", "html5"]} fontSize={40} />
            <FontAwesomeIcon icon={["fab", "css3"]} fontSize={40} />
            <FontAwesomeIcon icon={["fab", "js"]} fontSize={40} />
            <FontAwesomeIcon icon={["fab", "python"]} fontSize={40} />
            <FontAwesomeIcon icon={["fab", "aws"]} fontSize={40} />
          </div>
        </div>
      </div>
      <div className={styles.content_side}>
          <RightContainer/>
      </div>
    </main>
  )
}

export default Home
