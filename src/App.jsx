import { useState } from "react";

import Benefits from "./containers/Benefits/Benefits";
import Navbar from "./containers/Navbar/Navbar";
import Hero from "./containers/Hero/Hero";

import Backdrop from "./UI/Backdrop/Backdrop";

import styles from "./App.module.scss";
import Modal from "./components/Modal/Modal";

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={styles["main-container"]}>
      <div className={styles["outer-container"]}>
        <div className={styles["inner-container"]}>
          <Navbar />
        </div>
      </div>

      <div
        className={`${styles["outer-container"]}`}
        style={{ alignItems: "flex-start" }}
      >
        <div className={styles["inner-container"]}>
          <Hero setModalActive={setModalActive} id="home" />
        </div>
      </div>

      <div style={{ overflow: "hidden" }}>
        <div
          className={`${styles["outer-container"]} ${styles["benefits-container"]}`}
        >
          <div className={styles["inner-container"]}>
            <Benefits id="benefits" />
          </div>
        </div>
      </div>
      {modalActive && (
        <Backdrop setActive={setModalActive}>
          <Modal setActive={setModalActive} />
        </Backdrop>
      )}
    </div>
  );
}

export default App;
