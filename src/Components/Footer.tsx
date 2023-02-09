import { useState, useEffect } from 'react';
import CallBackMenu from './CallBackMenu';
import Contacts from './Contacts';

const Footer = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isVisibleCallbackMenu, setVisibleCallbackMenu] = useState(false);

  const [max, setMax] = useState(0);

  useEffect(() => {
    setMax(window.innerWidth);
  }, []);
  return (
    <footer className="footer">
      <div className="container">
        <Contacts isOpen={showMenu} close={setShowMenu} />
        <CallBackMenu
          y="0"
          x='0'
          isOpen={isVisibleCallbackMenu}
          close={setVisibleCallbackMenu}
        />
        <div className="footer_inner">
          <div className="footer_title">
            <div className="footer_title_left">
              e<span className="letterL">l</span>grow
            </div>
            <div className="footer_title_right">
              <a href="#"> ВАКАНСИИ </a>
            </div>
          </div>
          <div className="footer_center">
            <div
              onClick={() => setVisibleCallbackMenu(true)}
              className="footer_center-title"
            >
              <h1>Стать клиентом</h1>
            </div>
            <div className="footer_center-wrap">
              <div className="footer_center-wrap_left">
                <a href="#">Главная</a>
                <a href="#">Цены</a>
                <a href="#">Портфолио</a>
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowMenu(true)}
                >
                  контакты
                </a>
              </div>
              <div className="footer_center-wrap_right">
                <a className="presentation" href="#">
                  презентация
                </a>
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            {max > 560 && (
              <div className="footer_bottom_item">
                <h2>
                  <img src="/images/Copyright.svg" alt="" />
                  Все права защищены 2023
                </h2>
              </div>
            )}

            <div className="footer_bottom_item">
              <a href="https://t.me/Elgrow_dev">
                <img src="/images/telegram-small1440.svg" alt="" />
                Telegram
              </a>
            </div>
            <div className="footer_bottom_item">
              <a href="mailto:info@elgrow.ru">
                <img src="/images/fluent_mail-20-filled.svg" alt="" />
                info@elgrow.ru
              </a>
            </div>
          </div>
          {max <= 560 && (
            <div
              style={{ paddingTop: '19px', paddingBottom: '29px' }}
              className="footer_bottom_item"
            >
              <h2>
                <img src="/images/Copyright.svg" alt="" />
                Все права защищены 2023
              </h2>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
