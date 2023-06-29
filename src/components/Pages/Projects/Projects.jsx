import React from 'react'
import IndividualProject from "./IndividualProject"
import styles from "./Projects.module.css"

function Projects() {
  return (
    <div className={styles.project_container}>
      <div className={styles.title}>
        <h2>Projects</h2>
      </div>
      <div className={styles.projects}>
      <IndividualProject url="./assets/capstonePicture.png" title="Music Recommender" description="For this project, my goal was to develop an application that not only reflects my passions but also challenges me to acquire new knowledge. By leveraging the Spotify API, I successfully retrieved detailed information about individual songs, enabling users to curate personalized playlists and discover similar tracks that align with their musical taste. It was then hosted on AWS using EC2 having the back-end created with express." link="http://44.202.62.164:4000/" source="https://github.com/ryanwebb24/Capstone-Project"/>
      <IndividualProject url="./assets/recipeApp.png" title="Recipe App" description="I was challenged to create a clone of a recipe app in react. I was able to use hooks to be able to send http requests(useEffect) and to update data on screen(useState). This allowed my to create a fast and responsive web page." link="https://github.com/ryanwebb24/Dev-Mountain/tree/main/Specs/Week3/project" source="https://github.com/ryanwebb24/Dev-Mountain/tree/main/Specs/Week3/project"/>
      <IndividualProject url="./assets/dbDesign.png" title="Data Base Design" description="In my schooling I was challanged to design my own database and implement it in a full stack application connecting it to my backend using Sequelize. I was able to learn how the back-end interacts with the front-end and the database to send data from the user to a a place where it can be persistent." link="https://github.com/ryanwebb24/Assessment-DevMountain/tree/main/week5" source="https://github.com/ryanwebb24/Assessment-DevMountain/tree/main/week5"/>
      <IndividualProject url="./assets/chessGame.png" title="Chess Game" description="I fell in love with chess at one point and wanted to code it out in python. Using pygame and python I created chess with functioning logic and movable pieces I am still in the process of adding some features like check and chack mate." link="https://github.com/ryanwebb24/Chess-Game" source="https://github.com/ryanwebb24/Chess-Game"/>
      <IndividualProject url="./assets/blogSite.png" title="Blog Site" description="To improve my python skills I made a blog site to learn user authenication, jinja, SQLAlchemy, and flask as the back-end. It challanged me to learn how to write a server in all python and to learn new python skills that I didn't have before." link="https://github.com/ryanwebb24/Blog-Site" source="https://github.com/ryanwebb24/Blog-Site"/>
      <IndividualProject url="./assets/terminal21.png" title="21(black-jack)" description="In a college course I was tasked with creating 21 in the terminal using only python. I made custom cards and use object-oriented programming to make a clean and efficient terminal game of 21" link="https://github.com/ryanwebb24/terminal21" source="https://github.com/ryanwebb24/terminal21"/>
      </div>
    </div>
  )
}

export default Projects