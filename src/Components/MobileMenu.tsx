import { motion } from 'framer-motion';
import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

interface Props {
  isOpen: boolean;
  close: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu: React.FC<Props> = ({ isOpen, close }) => {
  const [isVisibleCallbackMenu, setVisibleCallbackMenu] = useState(false);
  const [max, setMax]: any = useState(0);

  useEffect(() => {
    setMax(window?.visualViewport?.width);
  }, []);

  if (typeof window !== 'undefined' && isOpen) {
    let body: any = document.querySelector('body');

    body.style.overflowY = 'hidden';
  } else if (typeof window !== 'undefined' && !isOpen) {
    let body: any = document.querySelector('body');
    body.style.overflowY = 'auto';
  }

  const variants = {
    open: { y: 0, transition: { duration: 0.8 } },
    closed: {
      y: '-110%',
      transition: { duration: 0.8, delay: 0.2 },
    },
  };
  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      className="MobileMenu"
    >
      <motion.div className="headerMenu">
        <span className="logoText">
          e<span className="letterL">l</span>grow.
        </span>
        <motion.div onClick={() => close(false)}>
          <img src="/images/closeBlack.svg" alt="" />
        </motion.div>
      </motion.div>
      <motion.div className="menuContent">
        <Link  delay={900}
          onClick={() => close(false)}
          to="aboutNumbers"
          spy={true}
          smooth={true}
          duration={500}
        >
          О нас в цифрах
        </Link>
        <Link  delay={900}
          onClick={() => close(false)}
          to="aboutLetters"
          spy={true}
          smooth={true}
          duration={500}
        >
          О нас в буквах
        </Link>
        <Link
        delay={900}
          offset={150}
          onClick={() => close(false)}
          to="mobilePortfolio"
          spy={true}
          smooth={true}
          duration={500}
        >
          Портфолио
        </Link>

        <Link  delay={900}
          offset={100}
          onClick={() => close(false)}
          to="workingProcess"
          spy={true}
          smooth={true}
          duration={500}
        >
          Как мы работаем
        </Link>

        <Link  delay={900}
          offset={232}
          onClick={() => close(false)}
          to="pricesBlock"
          spy={true}
          smooth={true}
          duration={500}
        >
          Цены
        </Link>

        <div className="button-rainbowMenu">
          <div className="button-rainbowMenu-circle">
            <span>Стать клиентом</span>
          </div>
        </div>
      </motion.div>

      <motion.div className="contactsContainer">
        <div>
          <img src="/images/telegram-small1440.svg" alt="" />
          <a href="https://t.me/Elgrow_dev"> Elgrow_dev</a>
        </div>
        <div>
          <a> +7 343 302 90 49 </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
