import { useState } from "react";
import sampleSize from "lodash.samplesize";
import shuffle from "lodash.shuffle";
import styles from "../../styles/Board.module.css";
import Card from "./Card.js";

const getArrayOfIndexes = () => {
  // return an array of 6 random number pairs between 0 & 11
  const origIndexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const tempIndexArray = sampleSize(origIndexArray, 6);
  const indexPairsArray = tempIndexArray.concat(tempIndexArray);

  return indexPairsArray;
};

export default function Board(props) {
  const [indexArray, setIndexArray] = useState();
  const newArray = getArrayOfIndexes();
  const shuffledArray = shuffle(newArray);

  return (
    <div className={styles.grid}>
      {shuffledArray.map((item, index) => (
        <Card key={index} imgSrc={props.data[item].urls.small} />
      ))}
    </div>
  );
}
