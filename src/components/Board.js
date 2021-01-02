import { useEffect, useState } from "react";
import sampleSize from "lodash.samplesize";
import shuffle from "lodash.shuffle";
import styles from "../../styles/Board.module.css";
import Card from "./Card.js";

const getArrayOfIndexes = (indexArray) => {
  // return an array of 6 random number pairs between 0 & 11
  const tempIndexArray = sampleSize(indexArray, 6);
  const indexPairsArray = tempIndexArray.concat(tempIndexArray);

  return indexPairsArray;
};

export default function Board(props) {
  const [indexArray, setIndexArray] = useState([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
  ]);

  useEffect(() => {
    // Set array that determines images for board only on initial load of app
    const newArray = getArrayOfIndexes(indexArray);
    const shuffledArray = shuffle(newArray);
    setIndexArray(shuffledArray);
  }, []);

  return (
    <div className={styles.grid}>
      {indexArray.map((item, index) => (
        <Card key={index} imgSrc={props.data[item].urls.small} />
      ))}
    </div>
  );
}
