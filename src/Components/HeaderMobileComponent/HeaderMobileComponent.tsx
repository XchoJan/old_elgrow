import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import styles from "./HeaderMobileComponent.module.css";

const navButtons = ['О нас в цифрах', 'О нас в буквах', 'Портфолио', 'Как мы работаем', 'Цены']

const HeaderMobileComponent = () => {
  const [max, setMax]: any = useState(0);

  useEffect(() => {
    const screenWidth = window?.visualViewport?.width
    setMax(screenWidth);
  }, []);

  return (
      <div className={styles.header}>
        <div className={styles.logo}>
          e<span className={`${styles.logo} ${styles.letterL}`}>l</span>grow.
        </div>
        <div className={styles.navMenu}>
          {navButtons.map((btn, index) => {
            return <Link
                key={index}
                offset={150}
                to="mobilePortfolio"
                spy={true}
                smooth={true}
                duration={500}
                className={styles.navBtn}
            >
              {btn}
            </Link>
          })}
          <Link
              offset={150}
              to="mobilePortfolio"
              spy={true}
              smooth={true}
              duration={500}
              className={`${styles.navBtn} ${styles.navBtnUnderline}`}
          >
            Стать клиентом
          </Link>
        </div>
        <div className={styles.contactsBlock}>
          <div className={styles.tgBlock}>
            <img className={styles.tgIcon} src="/images/telegram-small1440.svg" alt="" />
            <a className={styles.tgLink} href="https://t.me/Elgrow_dev"> Elgrow_dev</a>
          </div>
          <div className={styles.phoneBlock}>+7 495 109 90 49</div>
        </div>
      </div>
  );
};

export default HeaderMobileComponent;
