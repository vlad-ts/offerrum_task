import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import Logo from "../../assets/NFT.svg";
import { Close } from "../../assets";

import Backdrop from "../../UI/Backdrop/Backdrop";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={styles.nav}>
      <a className={styles.nav__logo}>
        <div className={styles.nav__elipse_outer}>
          <div className={styles.nav__elipse_inner}></div>
        </div>
        <div className={styles.nav__name}>
          <img src={Logo} alt="logo" />
        </div>
      </a>
      <div className={styles.nav__menu}>
        <ul className={styles.nav__links}>
          <li>
            <a href="#home" onClick={() => setToggleMenu(false)}>
              Главная
            </a>
          </li>
          <li>
            <a href="#benefits" onClick={() => setToggleMenu(false)}>
              Что даст обучение
            </a>
          </li>
        </ul>
        <div className={`btn-secondary ${styles.nav__login}`}>
          <a>Личный кабинет</a>
        </div>
      </div>

      <div
        className={styles.nav__hamburger}
        onClick={() => setToggleMenu(true)}
      >
        <span></span>
        <span></span>
      </div>

      {toggleMenu && (
        <Backdrop setActive={setToggleMenu}>
          <div
            className={`${styles.nav_mobile} slide-left`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`${styles.nav_mobile__inner}`}>
              <div className={styles.nav_mobile__head}>
                <a className={styles.nav__logo}>
                  <div className={styles.nav__elipse_outer}>
                    <div className={styles.nav__elipse_inner}></div>
                  </div>
                  <div className={styles.nav__name}>
                    <img src={Logo} alt="logo" />
                  </div>
                </a>
                <div onClick={() => setToggleMenu(false)}>
                  <img src={Close} alt="logo" />
                </div>
              </div>

              <ul className={styles.nav_mobile__links}>
                <li>
                  <a href="#home" onClick={() => setToggleMenu(false)}>
                    Главная
                  </a>
                </li>
                <li>
                  <a href="#benefits" onClick={() => setToggleMenu(false)}>
                    Что даст обучение
                  </a>
                </li>
              </ul>
              <div className="btn-secondary">
                <a>Личный кабинет</a>
              </div>
            </div>
          </div>
        </Backdrop>
      )}
    </nav>
  );
};

export default Navbar;
