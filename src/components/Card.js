import { useState, useCallback } from "react";
import styles from "../../styles/Card.module.css";

export default function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const onClick = useCallback(() => {
    props.increaseCount();
    setIsFlipped((flipped) => !flipped);
  }, []);

  return (
    <div className={styles.card} onClick={onClick}>
      {isFlipped && <img className={styles.img} src={props.imgSrc} />}
    </div>
  );
}
