import Head from "next/head";
import styles from "../styles/Home.module.css";
import useSWR from "swr";
import Board from "../src/components/Board.js";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Home() {
  // get photos from proxy
  const { data, error } = useSWR("/api/image", fetcher);

  return (
    <div className={styles.container}>
      <Head>
        <title>Picture Match Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Picture Match Game</h1>
        {error ? (
          <div>failed to load</div>
        ) : !data ? (
          <div>loading...</div>
        ) : (
          <Board data={data.images.results} />
        )}
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
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
