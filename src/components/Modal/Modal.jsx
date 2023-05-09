import React from "react";
import styles from "./Modal.module.scss";
import { Close } from "../../assets";

const Modal = ({ setActive, active }) => {
  return (
    <div
      className={`${styles["modal-container"]}  `}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={`${styles.modal} ${active ? styles.active : ""} scale-up`}
      >
        <div className={styles.modal__close} onClick={() => setActive(false)}>
          <img src={Close} />
        </div>

        <div className={styles["modal__inner-container"]}>
          <h1>Начни прямо сейчас!</h1>
          <p>Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
          <form>
            <input type="email" placeholder="Ваш email" />
            <button className={`btn-primary`}>Оплатить</button>
          </form>
          <div className={styles.modal__gradient}></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
