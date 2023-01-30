import { useState } from 'react';
import Contacts from './Contacts';

const Footer = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <footer className="footer">
      <div className="container">
        <Contacts isOpen={showMenu} close={setShowMenu} />
        <div className="footer_inner">
          <div className="footer_title">
            <div className="footer_title_left">
              <img src="/images/logo_white.svg" alt="" />
            </div>
            <div className="footer_title_right">
              <a href="#"> ВАКАНСИИ </a>
            </div>
          </div>
          <div className="footer_center">
            <div className="footer_center-title">
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
            <div className="footer_bottom_item">
              <h2>
                <img src="/images/Copyright.svg" alt="" />
                Все права защищены 2023
              </h2>
            </div>
            <div className="footer_bottom_item">
              <h3>
                <img src="/images/telegram-small1440.svg" alt="" />
                Telegram
              </h3>
            </div>
            <div className="footer_bottom_item">
              <h3>
                <img src="/images/fluent_mail-20-filled.svg" alt="" />
                info@elgrow.ru
              </h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
