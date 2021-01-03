import styles from "../../styles/Card.module.css";

export default function Card(props) {
  const isFlipped = true;
  return (
    <div className={styles.card} onClick={props.increaseCount}>
      {isFlipped && <img className={styles.img} src={props.imgSrc} />}
    </div>
  );
}
