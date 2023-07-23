import {motion} from "framer-motion";
import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Link} from "react-scroll";
import styles from "./MobileMenu.module.css";

interface Props {
  isOpen: boolean;
  close: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu: React.FC<Props> = ({isOpen, close}) => {
  const [max, setMax]: any = useState(0);

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
        <motion.div className="headerMenu">
        <span className="logoText">
          e<span className="letterL">l</span>grow.
        </span>
          <motion.div onClick={() => close(false)}>
            <img className={styles.closeBtn} src="/images/closeBlack.svg" alt=""/>
          </motion.div>
        </motion.div>
        <motion.div className="menuContent">
          <Link delay={700}
                onClick={() => close(false)}
                to="aboutUsNumbersComponent"
                spy={true}
                smooth={true}
                duration={500} offset={-70}
                className={styles.navBtn}
          >
            О нас в цифрах
          </Link>
          <Link delay={700}
                onClick={() => close(false)}
                to="aboutUsLetterComponent"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                className={styles.navBtn}
          >
            О нас в буквах
          </Link>
          <Link
              delay={700}
              onClick={() => close(false)}
              to="portfolioComponent"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className={styles.navBtn}
          >
            Портфолио
          </Link>

          <Link delay={700}
                onClick={() => close(false)}
                to="howWeWorkComponent"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className={styles.navBtn}
          >
            Как мы работаем
          </Link>

          <Link delay={700}
                onClick={() => close(false)}
                to="priceComponent"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className={styles.navBtn}
          >
            Цены
          </Link>
        </motion.div>

        <motion.div className="contactsContainer">
          <div>
            <img src="/images/telegram-small1440.svg" alt=""/>
            <a href="https://t.me/Elgrow_dev"> Elgrow_dev</a>
          </div>
          <div>
            <a> +7 343 302 90 49 </a>
          </div>
        </motion.div>
        <div className={styles.animateButtonBlock}>
          <Link delay={700}
                onClick={() => close(false)}
                to="becomeClientComponent"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className={styles.animateButton}
          >
            <div className={styles.animateButtonText}>{`Стать\nклиентом`}</div>
          </Link>
        </div>
      </motion.div>
  );
};

export default MobileMenu;
