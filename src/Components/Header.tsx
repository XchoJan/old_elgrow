import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const Header = () => {
    let oldValue = 0;

    if (typeof document !== 'undefined') {
      const wrap: any = document.querySelector('.header_bottom-cases_box');
      wrap.style.maxWidth = '95%';
      const growBlockElem = () => {
        let newValue = window.pageYOffset;
        const maxWidth = wrap.style.maxWidth;
        let valueWidth = maxWidth.substring(0, 4);
        console.log(wrap.getBoundingClientRect().y);
        if (wrap.getBoundingClientRect().y <= 298) {
          return;
        }
  
        if (valueWidth[2] === '%') {
          valueWidth = Number(maxWidth.substring(0, 2));
        } else if (valueWidth[3] === '%') {
          valueWidth = Number(maxWidth.substring(0, 3));
        } else {
          valueWidth = Number(maxWidth.substring(0, 4));
        }
        if (oldValue - newValue < 0) {
          if (valueWidth === 100) {
            valueWidth = 100;
            let newWidth = String(valueWidth) + '%';
            wrap.style.maxWidth = newWidth;
          } else {
            valueWidth += 1;
            let newWidth = String(valueWidth) + '%';
            wrap.style.maxWidth = newWidth;
          }
        } else if (oldValue - newValue > 0) {
          if (valueWidth <= 95) {
            valueWidth = 95;
            let newWidth = String(valueWidth) + '%';
            wrap.style.maxWidth = newWidth;
          } else {
            valueWidth -= 1;
  
            let newWidth = String(valueWidth) + '%';
            wrap.style.maxWidth = newWidth;
          }
        }
        oldValue = newValue;
      };
  
      window.addEventListener('scroll', growBlockElem);
    }

  return (
    <header>
      <div className="container">
        <div className="header_top">
          <div className="logo">
            <img src="/images/elgrow._logo.svg" alt="" />
          </div>
          <div className="after_logo">
            <h2>
              Digital- <br />
              интегратор <br />c 2012 года
            </h2>
          </div>
        </div>
        <div className="header_bottom">
          <img className="eagle" src="/images/eagle.png" alt="" />

          <div id="trigger1" className="header_bottom-title">
            <Parallax speed={-20} translateY={[-200, 400]}>
              <h1>
                Разработка и интеграция <br />
                <span>IT-РеШеНИЙ. </span> <br />
                Автоматизация бизнеса.
                <br />
                <span>аУТСТАФ.</span>
              </h1>{' '}
            </Parallax>
          </div>
        </div>
        <div className="header_bottom-cases">
          <div className="header_bottom-cases_box">
            <div className="cases_box_green">
              <p>Новый кейс</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
