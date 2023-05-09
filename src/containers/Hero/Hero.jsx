import React from "react";
import styles from "./Hero.module.scss";
import { Man } from "../../assets/index";

const Hero = ({ setModalActive }) => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.hero__gradient}></div>
      <h1 className={styles.hero__title_mobile}>
        Не упусти возможность войти в <span>прибыльную нишу</span>
      </h1>
      <div className={styles["hero__img"]}>
        <img src={Man}></img>
      </div>
      <div className={styles.hero__description}>
        <h1 className={styles.hero__title_desktop}>
          Не упусти возможность войти в <span>прибыльную нишу</span>
        </h1>
        <h2 className={styles.hero__subtitle}>
          Получи все нужные навыки для заработка на NFT всего за 28 дней!
        </h2>
        <div
          className={`btn-primary ${styles.hero__button}`}
          onClick={() => setModalActive(true)}
        >
          <a>Начать зарабатывать на NFT</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
