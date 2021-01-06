import { useState, useCallback } from "react";
import styles from "../../styles/Card.module.css";

export default function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const onClick = useCallback(() => {
    props.increaseCount();
    // check if match occurred - if no match, flip...?
    // or make the onCLick conditional based on array of matched images...
    setIsFlipped((flipped) => !flipped);
  }, []);

  const onClickHandler = () => {
    onClick();
    props.checkForMatch(props.id);
  };

  // TODO: disable the onclick for items that exist in array to be created (matchedIds)
  const shouldHaveOnClick = props.matchedIds.includes(props.id);

  return (
    <>
      {!props.matchedIds.includes(props.id) ? (
        <div
          className={styles.card}
          onClick={shouldHaveOnClick ? onClickHandler : undefined}
        >
          {isFlipped && (
            <img
              className={styles.img}
              src={props.imgSrc}
              alt={props.description}
            />
          )}
        </div>
      ) : (
        <div className={styles.card}>
          <img
            className={styles.img}
            src={props.imgSrc}
            alt={props.description}
          />
        </div>
      )}
    </>
  );
}
