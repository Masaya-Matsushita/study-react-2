import Head from "next/head"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import styles from "../styles/Home.module.css"

export default function About({
  doubleCount,
  isShow,
  handleClick,
  handleDisplay,
  text,
  array,
  handleChange,
  handleAdd,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>

      <Header />
      {isShow ? <h1>{doubleCount}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input value={text} onChange={handleChange}></input>
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li>{item}</li>
        })}
      </ul>
      <Main page="about" />
      <Footer />
    </div>
  )
}
