import React from 'react';

const HeaderMobile = () => {
  return (
    <div className="HeaderMobile">
      <div className="logoText">
        {' '}
        e<span className="letterL">l</span>grow.
      </div>
      <div className="navContainer">
        <div>О нас в цифрах</div>
        <div>О нас в буквах</div>
        <div>Портфолио</div>
        <div>Как мы работаем</div>
        <div>Цены </div>
        <div className="importantText">Стать клиентом</div>
      </div>
      <div className="contactsContainer">
        <div>
          <img src="/images/telegram-small1440.svg" alt="" />

          <a href="https://t.me/Elgrow_dev"> Elgrow_dev</a>
        </div>
        <div>
          <a> +7 343 302 90 49 </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
