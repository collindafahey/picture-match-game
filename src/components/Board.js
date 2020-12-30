import styles from "../../styles/Board.module.css";
import Card from "./Card.js";

export default function Board(props) {
  return (
    <div className={styles.grid}>
      <Card imgSrc={props.data[Math.floor(Math.random() * 10)].urls.small} />
      <Card imgSrc={props.data[Math.floor(Math.random() * 10)].urls.small} />
      <Card imgSrc={props.data[Math.floor(Math.random() * 10)].urls.small} />
      <Card imgSrc={props.data[Math.floor(Math.random() * 10)].urls.small} />
      <Card imgSrc={props.data[Math.floor(Math.random() * 10)].urls.small} />
      <Card imgSrc={props.data[Math.floor(Math.random() * 10)].urls.small} />
      <Card imgSrc={props.data[Math.floor(Math.random() * 10)].urls.small} />
      <Card imgSrc={props.data[Math.floor(Math.random() * 10)].urls.small} />
      <Card imgSrc={props.data[Math.floor(Math.random() * 10)].urls.small} />
    </div>
  );
}
