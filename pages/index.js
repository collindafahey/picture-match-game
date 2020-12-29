import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Picture Match Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Picture Match Game
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
          </div>
          <div className={styles.card}>
          </div>
          <div className={styles.card}>
          </div>
          <div className={styles.card}>
          </div>
          <div className={styles.card}>
          </div>
          <div className={styles.card}>
          </div>
          <div className={styles.card}>
          </div>
          <div className={styles.card}>
          </div>
          <div className={styles.card}>
          </div>
        </div>

        <div className={styles.aside}>
          <p>Attempts: 0</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
