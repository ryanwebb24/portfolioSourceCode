import React from 'react'
import styles from "./About.module.css"

function About() {
  return (
    <div className={styles.about_container}>
      <div className={styles.content}>
        <h2 className={styles.title}>A Little Bit More About Me</h2>
        <div className={styles.description}>
          <p>
            Greetings! I'm Ryan Webb, a software developer with a passion for building dynamic and user-friendly websites. Originally from Eagle Mountain, Utah, I'm currently based in the Northern Salt Lake Area and open to relocation opportunities. From an early age, I've been captivated by computers, and my love for them led me to build numerous custom gaming PCs. As I discovered the power of coding, I became enamored with the ability to make my computer execute my ideas. It was then that I realized web development was my true calling. With experience in React, JavaScript, HTML, CSS, Bootstrap, Python, Flask, PostgreSQL, and Express, I enjoy crafting seamless web experiences that combine aesthetics with functionality. I've had the opportunity to go to DevMountain to grow my knowledge and cement my self as a true developer.
          </p>
          <p>
            When I'm not coding, you can find me working on personal projects, indulging in my love for anime, exploring new music, challenging myself in rock climbing, or immersing myself in basketball, both as a player and spectator. I thrive on learning and embracing new technologies, and I'm always ready for a new challenge in the ever-evolving world of software development. If you need to get in contact with me hit me up on 
          </p>
        </div>
        <div className={styles.image_container}>
          <img src="./assets/anime.jpg" alt="img" />
          <img src="./assets/rockClimbing.jpg" alt="img" />
          <img src="./assets/basketball.jpg" alt="img" />
          <img src="./assets/music.jpg" alt="img" />
        </div>
      </div>
    </div>
  )
}

export default About