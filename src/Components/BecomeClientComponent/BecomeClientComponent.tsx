import React from "react";
import styles from "./BecomeClientComponent.module.css";
import Scroll from "react-scroll";
import Logo from "../Logo/Logo";

const Element = Scroll.Element;

const BecomeClientComponent = () => {
  return (
      <div className={styles.becomeClientComponent}>
        <Element name="becomeClientComponent"></Element>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Logo isLightMode/>
          </div>
          <div className={styles.textBlock}>
            <h2 className={styles.title}>Стать клиентом</h2>
            <div className={styles.btnsBlock}>
              <a className={styles.presentation} href="#">Презентация</a>
              <a className={styles.mainSite} href="https://elgrow.ru/">Основной сайт</a>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.line}></div>
            <div className={styles.footerContainer}>
              <div className={styles.footerItem}>
                <img className={styles.footerItemIcon} src="/images/Copyright.svg"
                     alt="Copyright"/>
                Все права защищены 2023
              </div>
              <div className={styles.footerItem}>
                <img className={styles.footerTGIcon} src="/images/telegram-small1440.svg"
                     alt="telegram-small1440"/>
                Elgrow_dev
              </div>
              <div className={styles.footerItem}>
                <img className={styles.footerEmailIcon}
                     src="/images/fluent_mail-20-filled.svg" alt="fluent_mail-20-filled"/>
                info@elgrow.ru
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default BecomeClientComponent;
