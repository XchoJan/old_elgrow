import {motion} from "framer-motion";
import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import styles from "./MobileMenuBrief.module.css";
import CallBackMenu from "../CallBackMenu";
import Link from "next/link";

interface Props {
  isOpen: boolean;
  close: Dispatch<SetStateAction<boolean>>;
}

const MobileMenuBrief: React.FC<Props> = ({isOpen, close}) => {
  const [max, setMax]: any = useState(0);

  const [isVisibleCallbackMenu, setVisibleCallbackMenu] = useState(false);

  useEffect(() => {
    setMax(window?.visualViewport?.width);
  }, []);

  if (typeof window !== "undefined" && isOpen) {
    let body: any = document.querySelector("body");

    body.style.overflowY = "hidden";
  } else if (typeof window !== "undefined" && !isOpen) {
    let body: any = document.querySelector("body");
    body.style.overflowY = "auto";
  }

  const variants = {
    open: {y: 0, transition: {duration: 0.8}},
    closed: {
      y: "-110%",
      transition: {duration: 0.8, delay: 0.2},
    },
  };
  return (
      <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className="MobileMenu"
      >
        <CallBackMenu
            y="0"
            x="0"
            isOpen={isVisibleCallbackMenu}
            close={setVisibleCallbackMenu}
        />
        <motion.div className="headerMenu">
        <span className="logoText">
          e<span className="letterL">l</span>grow.
        </span>
          <motion.div className={styles.menuClose} onClick={() => close(false)}>
            <img className={styles.closeBtn} src="/images/closeBlack.svg" alt=""/>
          </motion.div>
        </motion.div>
        <motion.div className="menuContent">
          <Link
              href='/mobilePage#aboutUsNumbersComponent'
              className={styles.navBtn}
          >
            О нас в цифрах
          </Link>
          <Link
              href='/mobilePage#aboutUsLetterComponent'
              className={styles.navBtn}
          >
            О нас в буквах
          </Link>
          <Link
              href='/mobilePage#portfolioComponent'
              className={styles.navBtn}
          >
            Портфолио
          </Link>
          <Link
              href='/mobilePage#howWeWorkComponent'
              className={styles.navBtn}
          >
            Как мы работаем
          </Link>
          <Link
              href='/mobilePage#priceComponent'
              className={styles.navBtn}
          >
            Цены
          </Link>
        </motion.div>

        <motion.div className="contactsContainer">
          <div>
            <img src="/images/telegram-small1440.svg" alt=""/>
            <a className={styles.tgText} target='_blank' href="https://t.me/Elgrow_dev"> Elgrow_dev</a>
          </div>
          <div>
            <a className={styles.phoneText} href="tel:+74951099049" target='_blank'> +7 495 109 90 49 </a>
          </div>
        </motion.div>
        <div className={styles.animateButtonBlock}>
          <div
              onClick={() => setVisibleCallbackMenu(true)}
              className={styles.animateButton}
          >
            <div className={styles.animateButtonText}>{`Обратный\nзвонок`}</div>
          </div>
        </div>
      </motion.div>
  );
};

export default MobileMenuBrief;
