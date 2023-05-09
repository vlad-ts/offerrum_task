import React from "react";
import styles from "./EmojiCard.module.scss";

const EmojiCard = ({ card: { image, text } }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__backdrop} />

      <div className={styles.card__inner}>
        <div className={styles.card__img}>
          <img src={image} />
        </div>
        <p className={styles.card__text}>{text}</p>
      </div>
    </div>
  );
};

export default EmojiCard;
