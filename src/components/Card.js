import { useState, useCallback } from "react";
import styles from "../../styles/Card.module.css";

export default function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  // disable the onclick for items that exist in array of matched ids
  const shouldHaveOnClick = !props.matchedIds.includes(props.id);

  const onClick = useCallback(() => {
    props.increaseCount();
    setIsFlipped((flipped) => !flipped);
  }, []);

  const onClickHandler = () => {
    onClick();
    props.checkForMatch(props.id);
  };

  const imgElement = (
    <img className={styles.img} src={props.imgSrc} alt={props.description} />
  );

  return (
    <>
      {shouldHaveOnClick ? (
        <div
          className={styles.card}
          onClick={shouldHaveOnClick ? onClickHandler : undefined}
        >
          {isFlipped && imgElement}
        </div>
      ) : (
        <div className={styles.card}>{imgElement}</div>
      )}
    </>
  );
}
