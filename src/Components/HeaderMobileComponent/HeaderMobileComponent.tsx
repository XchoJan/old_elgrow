import React, {useEffect, useState} from "react";
import {Link as ScrollLink} from "react-scroll";
import Link from "next/link";
import styles from "./HeaderMobileComponent.module.css";
import Logo from "../Logo/Logo";
import {useMediaQuery} from "react-responsive";
import MobileMenu from "../MobileMenu/MobileMenu";
import CallBackMenu from "../CallBackMenu";

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
  const [hideOnMobile, setHideOnMobile] = useState(false);
  const [hide1224px, setHide1224px] = useState(false);
  const [isVisibleCallbackMenu, setVisibleCallbackMenu] = useState(false);

  const is1224px = useMediaQuery({query: "(min-width: 1224px)"});

  const isMobile = useMediaQuery({query: "(min-width: 1024px)"});

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setShowNavbar(scrollPosition < 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setHideOnMobile(isMobile);
    setHide1224px(is1224px);
  }, [isMobile, is1224px]);

  return (
      <div className={styles.header}>
        <div className={styles.container}>
          <CallBackMenu
              y="0"
              x="0"
              isOpen={isVisibleCallbackMenu}
              close={setVisibleCallbackMenu}
          />
          <MobileMenu isOpen={showMenu} close={setShowMenu}/>
          <Link target="_blank" href={'/'}><Logo showLogo={showNavbar}/></Link>
          {hide1224px && <div className={!showNavbar ? styles.active : styles.navMenu}>
            {navButtons.map((btn, index) => {
              return <ScrollLink
                  key={index}
                  offset={-70}
                  to={btn.value}
                  spy={true}
                  smooth={true}
                  duration={150}
                  className={styles.navBtn}
              >
                {btn.title}
              </ScrollLink>;
            })}
            <div
                className={styles.navBtnUnderline} onClick={() => setVisibleCallbackMenu(true)}
            >
              Обратный звонок
            </div>
          </div>}
          {hide1224px ? <div
              className={!showNavbar ? styles.activeContactsBlock : styles.contactsBlock} >
            {!hide1224px && <div
                className={styles.navBtnUnderline} onClick={() => setVisibleCallbackMenu(true)}
            >
              Обратный звонок
            </div>}
            {hideOnMobile && <>
              <div className={styles.tgBlock}>
                <img className={styles.tgIcon} src="/images/telegram-small1440.svg"
                     alt=""/>
                <a className={styles.tgLink} target='_blank'
                   href="https://t.me/Elgrow_dev"> Elgrow_dev</a>
              </div>
              <a className={styles.phoneBlock} href="tel:+74951099049" target='_blank'>+7 495 109 90 49</a>
            </>}
            {!hide1224px && <div onClick={() => setShowMenu(true)}
                                 className={styles.burgerDesktopActive}>
              <img className={styles.burgerBtnIcon} src="/images/burgerMobile.svg"
                   alt="burgerMobile"/>
            </div>}
            {hide1224px && <div onClick={() => setShowMenu(true)}
                                className={!showNavbar ? styles.burgerDesktopActive : styles.burgerDesktopBtn}>
              <img className={styles.burgerBtnIcon} src="/images/burgerMobile.svg"
                   alt="burgerMobile"/>
            </div>}
          </div> :
            <div
            className={styles.activeContactsBlock}>
          {!hide1224px && <div onClick={() => setVisibleCallbackMenu(true)}
            className={styles.navBtnUnderline}
            >
            Обратный звонок
            </div>}
          {hideOnMobile && <>
            <div className={styles.tgBlock}>
            <img className={styles.tgIcon} src="/images/telegram-small1440.svg"
            alt=""/>
            <a className={styles.tgLink} target='_blank'
            href="https://t.me/Elgrow_dev"> Elgrow_dev</a>
            </div>
            <a className={styles.phoneBlock} href="tel:+74951099049" target='_blank'>+7 495 109 90 49</a>
            </>}
          {!hide1224px && <div onClick={() => setShowMenu(true)}
            className={styles.burgerDesktopActive}>
            <img className={styles.burgerBtnIcon} src="/images/burgerMobile.svg"
            alt="burgerMobile"/>
            </div>}
          {hide1224px && <div onClick={() => setShowMenu(true)}
            className={!showNavbar ? styles.burgerDesktopActive : styles.burgerDesktopBtn}>
            <img className={styles.burgerBtnIcon} src="/images/burgerMobile.svg"
            alt="burgerMobile"/>
            </div>}
            </div>
          }
        </div>
      </div>
  );
};

export default HeaderMobileComponent;
