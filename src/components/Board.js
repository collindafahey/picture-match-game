import { useEffect, useState } from "react";
import sampleSize from "lodash.samplesize";
import shuffle from "lodash.shuffle";
import styles from "../../styles/Board.module.css";
import Card from "./Card";

const getArrayOfIndexes = () => {
  // return an array of 6 random number pairs between 0 & 11
  const originalArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const tempIndexArray = sampleSize(originalArray, 6);
  const indexPairsArray = tempIndexArray.concat(tempIndexArray);
  const shuffledArray = shuffle(indexPairsArray);

  return shuffledArray;
};

export default function Board(props) {
  const [indexArray] = useState(() => getArrayOfIndexes());

  return (
    <div className={styles.grid}>
      {indexArray.map((item, index) => (
        <Card key={index} imgSrc={props.data[item].urls.small} />
      ))}
    </div>
  );
}
