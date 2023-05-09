import React from "react";
import styles from "./Benefits.module.scss";
import { cards } from "../../constants";

import EmojiCard from "../../components/EmojiCard/EmojiCard";

const Benefits = () => {
  return (
    <section className={styles.benefits} id="benefits">
      <h1 className={styles.benefits__title}>Что даст тебе обучение?</h1>
      <div className={styles.benefits__cards}>
        {cards.map((card) => (
          <EmojiCard card={card} key={card.id} />
        ))}
      </div>

      <div className={styles.benefits__elipse_purple}></div>
      <div className={styles.benefits__elipse_blue}></div>
      <div className={styles.benefits__gradient}></div>
      <div className={styles["benefits__gradient-top"]}></div>
      <div className={styles["benefits__gradient-bottom"]}></div>
      <div className={styles.benefits__elipse_blurred}></div>
    </section>
  );
};

export default Benefits;
