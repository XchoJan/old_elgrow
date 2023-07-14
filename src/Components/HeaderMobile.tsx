import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

interface Props {
  setShowMenu: any;
}

const HeaderMobile: React.FC<Props> = ({ setShowMenu }) => {
  const [max, setMax]: any = useState(0);
  useEffect(() => {
    setMax(window?.visualViewport?.width);
  }, []);

  return (
    <div className="HeaderMobile">
      <div className="logoText">
        e<span className="letterL">l</span>grow.
      </div>
      <div className="navContainer">
        {max > 1228 && (
          <>
            <Link to="aboutNumbers" spy={true} smooth={true} duration={500}>
              О нас в цифрах
            </Link>
            <Link to="aboutLetters" spy={true} smooth={true} duration={500}>
              О нас в буквах
            </Link>
            <Link
              offset={150}
              to="mobilePortfolio"
              spy={true}
              smooth={true}
              duration={500}
            >
              Портфолио
            </Link>

            <Link
              offset={100}
              to="workingProcess"
              spy={true}
              smooth={true}
              duration={500}
            >
              Как мы работаем
            </Link>

            <Link
              offset={232}
              to="pricesBlock"
              spy={true}
              smooth={true}
              duration={500}
            >
              Цены
            </Link>
            <div className="importantText">Стать клиентом</div>
          </>
        )}
        {max <= 768 && max > 560 && (
          <div className="importantText">Стать клиентом</div>
        )}
      </div>
      <div className="contactsContainer">
        {max > 768 && (
          <>
            <div>
              <img src="/images/telegram-small1440.svg" alt="" />

              <a href="https://t.me/Elgrow_dev"> Elgrow_dev</a>
            </div>
            <div>
              <a> +7 343 302 90 49 </a>
            </div>{' '}
          </>
        )}

        <div onClick={() => setShowMenu(true)} style={{ cursor: 'pointer' }}>
          <img src="/images/burgerMobile.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
