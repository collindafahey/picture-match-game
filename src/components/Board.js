import { useState } from "react";
import styles from "../../styles/Board.module.css";
import Card from "./Card.js";

const getArrayOfIndexes = () => {
  // return an array of 6 numbers between (& including) 0 & 9, without repeating values

  // have an array 0 to 11, then pop off 6 indexes at random
  const origIndexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  // let tempIndexArray = [];

  // duplicate array to get 6 pairs of indexes

  // assign 12 cards an index number - hold in state
  // is there a way to scramble order of an array???
};

export default function Board(props) {
  const [indexArray, setIndexArray] = useState();

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
      <Card imgSrc={props.data[Math.floor(Math.random() * 10)].urls.small} />
      <Card imgSrc={props.data[Math.floor(Math.random() * 10)].urls.small} />
      <Card imgSrc={props.data[Math.floor(Math.random() * 10)].urls.small} />
    </div>
  );
}
