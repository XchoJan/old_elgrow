import React, { useState, useMemo, useRef } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Menu from './Menu';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const ref = useRef(null);
  const [isVisibleCase, setVisibleCase] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const y1 = useTransform(scrollY, [0, 400], [100, 700]);
  const maxWidth = useTransform(scrollY, [0, 250], ['93vw', '100vw']);

  const imageMove = (e: any) => {
    setVisibleCase(true);
    const rect = e.target.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const x = e.clientX - rect.left;

    let image: any = document.getElementsByClassName('cases_box_green');

    image[0].style.left = `${x - 50}px`;
    image[0].style.top = `${y - 50}px`;
  };

  let oldValue = 0;

  // if (typeof document !== 'undefined') {
  //   const wrap: any = document.querySelector('.header_bottom-cases_box');

  //   const growBlockElem = () => {
  //     let newValue = window.pageYOffset;
  //     const maxWidth = getComputedStyle(wrap).maxWidth;

  //     let valueWidth: number | string = maxWidth.substring(0, 4);
  //     if (wrap.getBoundingClientRect().y <= 298) {
  //       return;
  //     }

  //     if (valueWidth[2] === '%') {
  //       valueWidth = Number(maxWidth.substring(0, 2));
  //     } else if (valueWidth[3] === '%') {
  //       valueWidth = Number(maxWidth.substring(0, 3));
  //     } else {
  //       valueWidth = Number(maxWidth.substring(0, 4));
  //     }
  //     if (oldValue - newValue < 0) {
  //       if (valueWidth === 100) {
  //         valueWidth = 100;
  //         let newWidth = String(valueWidth) + '%';
  //         wrap.style.maxWidth = newWidth;
  //       } else {
  //         valueWidth += 1;
  //         let newWidth = String(valueWidth) + '%';
  //         wrap.style.maxWidth = newWidth;
  //       }
  //     } else if (oldValue - newValue > 0) {
  //       if (valueWidth <= 95) {
  //         valueWidth = 95;
  //         let newWidth = String(valueWidth) + '%';
  //         wrap.style.maxWidth = newWidth;
  //       } else {
  //         valueWidth -= 1;

  //         let newWidth = String(valueWidth) + '%';
  //         wrap.style.maxWidth = newWidth;
  //       }
  //     }
  //     oldValue = newValue;
  //   };

  //   window.addEventListener('scroll', growBlockElem);
  // }

  return (
    <header>
      <div className="container">
        <Menu isOpen={showMenu} close={setShowMenu} />
        <div className="header_top">
          <div className="logo">
            <img src="/images/elgrow._logo.svg" alt="" />
          </div>
          <div className="after_logo">
            <h2 onClick={() => setShowMenu(true)}>
              Digital- <br />
              интегратор <br />c 2012 года
            </h2>
          </div>
        </div>
        <div className="header_bottom">
          <img className="eagle" src="/images/eagle.png" alt="" />

          <div id="trigger1" className="header_bottom-title">
            {/* <Parallax translateY={[-200, 200]}> */}
            <motion.h1 style={{ y: y1 }}>
              Разработка и интеграция <br />
              <span>IT-РеШеНИЙ. </span> <br />
              Автоматизация бизнеса.
              <br />
              <span>аУТСТАФ.</span>
            </motion.h1>{' '}
            {/* </Parallax> */}
          </div>
        </div>
        <div
          onMouseOut={() =>
            setTimeout(() => {
              setVisibleCase(false);
            }, 50)
          }
          onMouseMove={(e) =>
            setTimeout(() => {
              imageMove(e);
            }, 50)
          }
          className="header_bottom-cases"
        >
          <motion.div
            style={{ maxWidth }}
            ref={ref}
            className="header_bottom-cases_box"
          >
            <AnimatePresence>
              {isVisibleCase && (
                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{ duration: 0.3 }}
                  exit={{
                    scale: 0,
                  }}
                  className="cases_box_green"
                >
                  <motion.p
                    initial={{ fontSize: 0 }}
                    animate={{ fontSize: '14px' }}
                    transition={{ duration: 0.3 }}
                    exit={{ fontSize: 0 }}
                  >
                    Новый <br /> кейс
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
