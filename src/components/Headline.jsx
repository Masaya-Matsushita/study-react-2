import styles from "../styles/Home.module.css"

export function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>

      <p className={styles.description}>
        アイテムの数は {props.children} 個です。
      </p>
      <button onClick={props.handleReduce}>減らす</button>
    </div>
  )
}
