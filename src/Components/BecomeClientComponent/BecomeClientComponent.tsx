import React, {useEffect, useState} from "react";
import styles from "./BecomeClientComponent.module.css";
import Scroll from "react-scroll";
import Logo from "../Logo/Logo";
import {useMediaQuery} from "react-responsive";
import CallBackMenu from "../CallBackMenu";

const Element = Scroll.Element;

const BecomeClientComponent = () => {
  const [hideOnMobile, setHideOnMobile] = useState(false);
  const [isVisibleCallbackMenu, setVisibleCallbackMenu] = useState(false);

  const isMobile = useMediaQuery({query: "(min-width: 1024px)"});

  useEffect(() => {
    setHideOnMobile(isMobile);
  }, [isMobile]);

  return (
      <div id='becomeClientComponent' className={styles.becomeClientComponent}>
        <Element name="becomeClientComponent"></Element>
        <CallBackMenu
            y="0"
            x="0"
            isOpen={isVisibleCallbackMenu}
            close={setVisibleCallbackMenu}
        />
        <div className={styles.container}>
          <div className={styles.logo}>
            <Logo isLightMode/>
          </div>
          <div className={styles.textBlock}>
            <h2 onClick={() => setVisibleCallbackMenu(true)} className={styles.title}>Получить предложение</h2>
            <div className={styles.titleUnderline}></div>
          </div>
          {!hideOnMobile ? <div className={styles.footer}>
            <div className={styles.footerContainer}>
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
            <div className={styles.line}></div>
            <div className={styles.footerItem}>
              <img className={styles.footerItemIcon} src="/images/Copyright.svg"
                   alt="Copyright"/>
              Все права защищены 2023
            </div>
          </div> : <div className={styles.footer}>
            <div className={styles.line}></div>
            <div className={styles.footerContainer}>
              <div className={styles.footerItem}>
                <img className={styles.footerItemIcon} src="/images/Copyright.svg"
                     alt="Copyright"/>
                Все права защищены 2023
              </div>
              <a href="https://t.me/Elgrow_dev" className={styles.footerItem}>
                <img className={styles.footerTGIcon} src="/images/telegram-small1440.svg"
                     alt="telegram-small1440"/>
                Elgrow_dev
              </a>
              <a href="mailto:info@elgrow.ru" className={styles.footerItem}>
                <img className={styles.footerEmailIcon}
                     src="/images/fluent_mail-20-filled.svg" alt="fluent_mail-20-filled"/>
                info@elgrow.ru
              </a>
            </div>
          </div>}
        </div>
      </div>
  );
};

export default BecomeClientComponent;
