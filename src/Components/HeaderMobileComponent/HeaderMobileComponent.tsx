import React, {useEffect, useState} from "react";
import {Link} from "react-scroll";
import styles from "./HeaderMobileComponent.module.css";
import Logo from "../Logo/Logo";
import {useMediaQuery} from "react-responsive";
import MobileMenu from "../MobileMenu/MobileMenu";

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
  const [showNavbar, setShowNavbar] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [hideOnSmallDesktop, setHideOnSmallDesktop] = useState(false);
  const [hideOnMobile, setHideOnMobile] = useState(false);


  const isSmallDesktop = useMediaQuery({query: "(min-width: 1223px)"});
  const isMobile = useMediaQuery({query: "(min-width: 1024px)"});

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setShowNavbar(scrollPosition < 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setHideOnSmallDesktop(isSmallDesktop);
    setHideOnMobile(isMobile);
  }, [isSmallDesktop, isMobile]);

  return (
      <div className={styles.header}>
        <div className={styles.container}>
          <MobileMenu isOpen={showMenu} close={setShowMenu}/>
          <Logo showLogo={showNavbar}/>
          {hideOnSmallDesktop && <div className={!showNavbar ? styles.active : styles.navMenu}>
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
          <div className={!showNavbar ? styles.activeContactsBlock:  styles.contactsBlock}>
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
            <div onClick={() => setShowMenu(true)} className={!showNavbar ? styles.burgerDesktopActive : styles.burgerDesktopBtn}>
              <img className={styles.burgerBtnIcon} src="/images/burgerMobile.svg"
                   alt="burgerMobile"/>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HeaderMobileComponent;
