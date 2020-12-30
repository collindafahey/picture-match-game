import styles from "../../styles/Board.module.css";

export default function Board(props) {
  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <img src={props.data[Math.floor(Math.random() * 10)].urls.small} />
      </div>
      <div className={styles.card}>
        <img src={props.data[Math.floor(Math.random() * 10)].urls.small} />
      </div>
      <div className={styles.card}>
        <img src={props.data[Math.floor(Math.random() * 10)].urls.small} />
      </div>
      <div className={styles.card}>
        <img src={props.data[Math.floor(Math.random() * 10)].urls.small} />
      </div>
      <div className={styles.card}>
        <img src={props.data[Math.floor(Math.random() * 10)].urls.small} />
      </div>
      <div className={styles.card}>
        <img src={props.data[Math.floor(Math.random() * 10)].urls.small} />
      </div>
      <div className={styles.card}>
        <img src={props.data[Math.floor(Math.random() * 10)].urls.small} />
      </div>
      <div className={styles.card}>
        <img src={props.data[Math.floor(Math.random() * 10)].urls.small} />
      </div>
      <div className={styles.card}>
        <img src={props.data[Math.floor(Math.random() * 10)].urls.small} />
      </div>
    </div>
  );
}
