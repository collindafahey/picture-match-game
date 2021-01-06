import { useCallback, useEffect, useState } from "react";
import sampleSize from "lodash.samplesize";
import shuffle from "lodash.shuffle";
import styles from "../../styles/Board.module.css";
import Card from "./Card";

// TODO: take care of situation where match is made from clicking same card twice in a row

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
  const [currentCard, setCurrentCard] = useState();
  const [matchedIds, setMatchedIds] = useState([]);

  const checkForMatch = useCallback(
    (newCard) => {
      setCurrentCard((prevCard) => {
        if (prevCard === newCard) {
          setMatchedIds([...matchedIds, newCard]);
        }
        return newCard;
      });
    },
    [matchedIds]
  );

  return (
    <div className={styles.grid}>
      {indexArray.map((item, index) => (
        <Card
          key={index}
          checkForMatch={checkForMatch}
          description={props.data[item].alt_description}
          id={props.data[item].id}
          imgSrc={props.data[item].urls.small}
          increaseCount={props.increaseCount}
          matchedIds={matchedIds}
        />
      ))}
    </div>
  );
}
