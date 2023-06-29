import React, { useEffect, useState } from 'react'
import styles from "./RightContainer.module.css"

function RightContainer() {
  const testData = [
    {title: "Switching to a React Frame of Mind as a New Developer", text: "As a new developer leaving the vanilla JavaScript sphere and moving to developing in React has been difficult...", url: "https://medium.com/@ryanwebb2444/switching-to-a-react-frame-of-mind-as-a-new-developer-fb56fae7620e"}
  ]
  return (
    <div className={styles.right_container}>
      <h2 className={styles.right_title}>What's New With Me</h2>
      {testData.map(item => <li className={styles.item}><h3 className={styles.item_title}>{item.title}</h3><p className={styles.item_text}>{item.text}</p><button className={styles.btn}><a href={item.url} className={styles.btn_link}>View full story</a></button></li>)}
    </div>
  )
}

export default RightContainer