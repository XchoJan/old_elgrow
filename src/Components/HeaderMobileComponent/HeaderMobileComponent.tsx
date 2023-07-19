import React, {useEffect, useState} from "react";
import {Link} from "react-scroll";
import styles from "./HeaderMobileComponent.module.css";
import Logo from "../Logo/Logo";
import {useMediaQuery} from "react-responsive";
import MobileMenu from "@components/MobileMenu/MobileMenu";

const navButtons = [
  {title: "О нас в цифрах", value: "aboutUsNumbersComponent"}, {
    title: "О нас в буквах",
    value: "aboutUsLetterComponent"
  }, {title: "Портфолио", value: "portfolioComponent"}, {
    title: "Как мы работаем",
    value: "howWeWorkComponent"
  }, {
    title: "Цены",
    value: "priceComponent"
  }];

const HeaderMobileComponent = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hideOnSmallDesktop, setHideOnSmallDesktop] = useState(false);
  const [hideOnMobile, setHideOnMobile] = useState(false);

  const isSmallDesktop = useMediaQuery({query: "(min-width: 1223px)"});
  const isMobile = useMediaQuery({query: "(min-width: 1024px)"});

  useEffect(() => {
    setHideOnSmallDesktop(isSmallDesktop);
    setHideOnMobile(isMobile);
  }, [isSmallDesktop, isMobile]);

  return (
      <div className={styles.header}>
        <div className={styles.container}>
          <MobileMenu isOpen={showMenu} close={setShowMenu}/>
          <Logo/>
          {hideOnSmallDesktop && <div className={styles.navMenu}>
            {navButtons.map((btn, index) => {
              return <Link
                  key={index}
                  offset={-70}
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
                offset={-70}
                to="becomeClientComponent"
                spy={true}
                smooth={true}
                duration={150}
                className={`${styles.navBtn} ${styles.navBtnUnderline}`}
            >
              Стать клиентом
            </Link>
          </div>}
          <div className={styles.contactsBlock}>
            {hideOnMobile ? <>
              <div className={styles.tgBlock}>
                <img className={styles.tgIcon} src="/images/telegram-small1440.svg"
                     alt=""/>
                <a className={styles.tgLink}
                   href="https://t.me/Elgrow_dev"> Elgrow_dev</a>
              </div>
              <div className={styles.phoneBlock}>+7 495 109 90 49</div>
            </> : <Link
                offset={0}
                to="becomeClientComponent"
                spy={true}
                smooth={true}
                duration={150}
                className={`${styles.navBtn} ${styles.navBtnUnderline}`}
            >
              Стать клиентом
            </Link>}
            {!hideOnSmallDesktop &&
                <div onClick={() => setShowMenu(true)} className={styles.burgerBtn}>
                  <img className={styles.burgerBtnIcon} src="/images/burgerMobile.svg"
                       alt="burgerMobile"/>
                </div>}
          </div>
        </div>
      </div>
  );
};

export default HeaderMobileComponent;
