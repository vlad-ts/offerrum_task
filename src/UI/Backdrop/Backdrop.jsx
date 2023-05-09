import React from "react";
import styles from "./Backdrop.module.scss";

const Backdrop = ({ setActive, children }) => {
  return (
    <div
      className={`${styles.backdrop}  opacity-up
      `}
      onClick={() => setActive(false)}
    >
      {children}
    </div>
  );
};

export default Backdrop;
