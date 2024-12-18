import React, { useState, useEffect, useRef } from 'react';

import { useRouter } from 'next/router';
import Menu from './Menu';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  return (
    <header>
      <div className="container">
        <Menu isOpen={showMenu} close={setShowMenu} />
        <div className="header_top">
          <div onClick={() => router.push('/')} className="logo">
            <img src="/images/elgrow._logo.svg" alt="" />
          </div>
          <div onClick={() => setShowMenu(true)} className="after_logo">
             <img id='burger2' src="/images/burger2.svg" alt="" />
            <img  id='burger1'src="/images/burger.svg" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
