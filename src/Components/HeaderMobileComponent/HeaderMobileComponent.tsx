import React, {useEffect, useState} from "react";
import {Link} from "react-scroll";
import styles from "./HeaderMobileComponent.module.css";
import Logo from "../Logo/Logo";

const navButtons = [
  {title: "О нас в цифрах", value: "aboutUsNumbersComponent"}, {
    title: "О нас в буквах",
    value: "aboutUsLetterComponent"
  }, {title: "Портфолио", value: "portfolioComponent"}, {title: "Как мы работаем", value: ""}, {
    title: "Цены",
    value: ""
  }];

const HeaderMobileComponent = () => {
  const [max, setMax]: any = useState(0);

  useEffect(() => {
    const screenWidth = window?.visualViewport?.width;
    setMax(screenWidth);
  }, []);

  return (
      <div className={styles.header}>
        <Logo/>
        <div className={styles.navMenu}>
          {navButtons.map((btn, index) => {
            return <Link
                key={index}
                offset={0}
                to={btn.value}
                spy={true}
                smooth={true}
                duration={150}
                className={styles.navBtn}
            >
              {btn.title}
            </Link>;
          })}
          <Link
              offset={0}
              to="becomeClient"
              spy={true}
              smooth={true}
              duration={150}
              className={`${styles.navBtn} ${styles.navBtnUnderline}`}
          >
            Стать клиентом
          </Link>
        </div>
        <div className={styles.contactsBlock}>
          <div className={styles.tgBlock}>
            <img className={styles.tgIcon} src="/images/telegram-small1440.svg" alt=""/>
            <a className={styles.tgLink} href="https://t.me/Elgrow_dev"> Elgrow_dev</a>
          </div>
          <div className={styles.phoneBlock}>+7 495 109 90 49</div>
        </div>
      </div>
  );
};

export default HeaderMobileComponent;
