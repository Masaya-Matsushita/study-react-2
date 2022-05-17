import Head from "next/head"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import styles from "../styles/Home.module.css"
import { useCounter } from "hooks/useCounter"
import { useInputArray } from "hooks/useInputArray"
import { useBgLightBlue } from "hooks/useBgLightBlue"

export default function About() {
  const { count, isShow, handleClick, handleDisplay } = useCounter()
  const { text, array, handleChange, handleAdd } = useInputArray()
  useBgLightBlue()

  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>

      <Header />
      {isShow ? <h1>{count}</h1> : null}
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
