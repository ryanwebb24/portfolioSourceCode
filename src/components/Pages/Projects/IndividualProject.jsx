import styles from "./IndividualProject.module.css"

function IndividualProject(props) {
  return (
    <div className={styles.project}>
      <div className={styles.project_text}>
        <h2 className={styles.project_title}>{props.title}</h2>
        <p className={styles.project_description}>{props.description}</p>
        <div className={styles.btn_center}>
        <button className={styles.project_btn}><a href={props.source} className={styles.project_source}>View source code here</a></button>
        </div>
      </div>
      <div className={styles.image_container} >
        <a href={props.link}><img src={props.url} alt="img" className={styles.project_image} loading="lazy"/></a>
      </div>
    </div>
  )
}

export default IndividualProject