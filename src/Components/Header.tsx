import React, { useState, useEffect, useRef } from 'react';

import Menu from './Menu';
 

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

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
      </div>
    </header>
  );
};

export default Header;
