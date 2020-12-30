import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import { useEffect, useState } from 'react';

export default function Home() {
  // more efficient route
  // const fetcher = url => fetch(url).then(r => r.json())
  // const { data, error } = useSWR('/api/image', fetcher)

  // longer route
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/image')
      .then(response => {
        if (response.status !== 200) { 
          // handle non-200 error
          setData(new Error())
        } else { 
          response.json() 
        }
      })
      .then(data => {
        setData(data)
      }).catch(error => {
        // handle other errors
        setData(new Error())
      })
  },
    []
  )

  console.log(data)

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
            {/* <img src={images[0]} /> */}
            {/* <CardImage /> */}
          </div>
          <div className={styles.card}>
            {/* <CardImage /> */}
          </div>
          <div className={styles.card}>
            {/* <CardImage /> */}
          </div>
          <div className={styles.card}>
            {/* <CardImage /> */}
          </div>
          <div className={styles.card}>
            {/* <CardImage /> */}
          </div>
          <div className={styles.card}>
            {/* <CardImage /> */}
          </div>
          <div className={styles.card}>
            {/* <CardImage /> */}
          </div>
          <div className={styles.card}>
            {/* <CardImage /> */}
          </div>
          <div className={styles.card}>
            {/* <CardImage /> */}
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
