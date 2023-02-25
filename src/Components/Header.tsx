import React, { useState, useEffect, useRef } from 'react';

import Menu from './Menu';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [max, setMax]: any  = useState(0);
  const ref = useRef(null);
  const [isVisibleCase, setVisibleCase] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 400], [0, max > 560 ? 410 : 320]);
  const maxWidth = useTransform(scrollY, [0, 250], ['85vw', '100vw']);
  let viewportWidth = 0;
 
  if (typeof window !== 'undefined') {
 
    viewportWidth = window?.visualViewport?.width;
  }
  useEffect(() => {
    setMax(window?.visualViewport?.width);
  }, []);
  const imageMove = (e: any) => {
    setVisibleCase(true);
    const rect = e.target.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const x = e.clientX - rect.left;

    let image: any = document.getElementsByClassName('cases_box_green');

    image[0].style.left = `${x - 50}px`;
    image[0].style.top = `${y - 50}px`;
  };

  return (
    <header>
      <div className="container">
        <Menu isOpen={showMenu} close={setShowMenu} />
        <div className="header_top">
          <div className="logo">
            <img src="/images/elgrow._logo.svg" alt="" />
          </div>
          <div onClick={() => setShowMenu(true)} className="after_logo">
            <h2>
              Digital- <br />
              интегратор <br />c 2012 года
            </h2>
            <img src="/images/burger.svg" alt="" />
          </div>
        </div>
        <div className="header_bottom">
          <img className="eagle" src="/images/eagle.png" alt="" />

          <div id="trigger1" className="header_bottom-title">
            <motion.h1 style={{ y: y1 }}>
              Разработка и интеграция <br />
              <span>IT-РеШеНИЙ. </span> <br />
              Автоматизация бизнеса.
              <br />
              <span>аУТСТАФ.</span>
            </motion.h1>{' '}
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
            style={viewportWidth > 768 ? { maxWidth } : { maxWidth: '100vw' }}
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
