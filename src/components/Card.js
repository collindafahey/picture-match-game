import styles from "../../styles/Card.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <img src={props.imgSrc} />
    </div>
  );
}
