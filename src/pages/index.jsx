import Head from "next/head"
import styles from "../styles/Home.module.css"
import { Footer } from "../components/Footer"
import { Main } from "../components/Main"
import { Header } from "../components/Header"

export default function Home(props) {
  const {
    count,
    isShow,
    handleClick,
    handleDisplay,
    text,
    array,
    handleChange,
    handleAdd,
  } = props

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
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
      <Main page="index" />
      <Footer />
    </div>
  )
}
